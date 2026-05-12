#!/usr/bin/env node
/**
 * Preprocesses MyST Markdown → clean Markdown → PDF
 * - Strips YAML frontmatter
 * - Converts MyST figure directives to simple img tags (or removes if image missing)
 * - Strips other MyST directives (admonitions, etc.)
 * - Strips inline MyST roles
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = path.join(__dirname, '..', 'chapters');
const outputDir = path.join(__dirname, '..', 'pdfs');
const tmpDir = path.join(__dirname, '..', '.tmp-clean');

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

function cleanMyST(content, chapterDir) {
  // 1. Strip YAML frontmatter (--- ... ---)
  content = content.replace(/^---[\s\S]*?---\n?/, '');

  // 2. Handle :::{figure} ... ::: blocks
  // Extract image path and alt text, convert to markdown image
  content = content.replace(/:::\{figure\}\s+([^\n]+)\n([\s\S]*?):::/g, (match, imgPath, attrs) => {
    const altMatch = attrs.match(/:alt:\s*(.+)/);
    const alt = altMatch ? altMatch[1].trim() : 'Figure';
    // Normalize path: remove leading ../
    const cleanPath = imgPath.trim().replace(/^\.\.\//, '');
    return `\n![${alt}](${cleanPath})\n`;
  });

  // 3. Handle :::{admonition} ... ::: and other triple-colon directives
  content = content.replace(/:::\{[^}]+\}[^\n]*\n([\s\S]*?):::/g, (match, inner) => {
    // Keep the inner content, strip the directive wrapper
    return '\n> ' + inner.trim().split('\n').join('\n> ') + '\n';
  });

  // 4. Handle ::: used as standalone closers (leftover)
  content = content.replace(/^:::$/gm, '');

  // 5. Strip MyST roles like {ref}`...`, {doc}`...`, {term}`...`
  content = content.replace(/\{[a-z_]+\}`([^`]+)`/g, '$1');

  // 6. Strip :label:, :align:, :width:, :figclass: lines (directive options not already cleaned)
  content = content.replace(/^:[a-z_]+:.*$/gm, '');

  // 7. Clean up excess blank lines (3+ → 2)
  content = content.replace(/\n{3,}/g, '\n\n');

  return content.trim();
}

// Custom CSS for nice PDF styling
const cssContent = `
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 12pt;
    line-height: 1.7;
    color: #1a1a1a;
    max-width: 750px;
    margin: 0 auto;
    padding: 20px 40px;
  }
  h1 {
    font-size: 24pt;
    color: #003087;
    border-bottom: 3px solid #003087;
    padding-bottom: 10px;
    margin-top: 40px;
  }
  h2 {
    font-size: 18pt;
    color: #003087;
    margin-top: 30px;
  }
  h3 {
    font-size: 14pt;
    color: #005eb8;
    margin-top: 20px;
  }
  h4 {
    font-size: 12pt;
    color: #005eb8;
  }
  code {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 10pt;
  }
  pre {
    background: #f4f4f4;
    padding: 15px;
    border-radius: 5px;
    border-left: 4px solid #003087;
    overflow-x: auto;
    font-size: 10pt;
  }
  blockquote {
    border-left: 4px solid #003087;
    margin: 20px 0;
    padding: 10px 20px;
    background: #f0f4ff;
    color: #333;
    font-style: italic;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  th {
    background: #003087;
    color: white;
    padding: 10px 12px;
    text-align: left;
  }
  td {
    padding: 8px 12px;
    border-bottom: 1px solid #ddd;
  }
  tr:nth-child(even) td {
    background: #f9f9f9;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
  }
  a { color: #005eb8; }
  ul, ol { margin: 10px 0; padding-left: 25px; }
  li { margin: 5px 0; }
  strong { color: #003087; }
`;

const cssFile = path.join(tmpDir, 'bankunited-style.css');
fs.writeFileSync(cssFile, cssContent);

// Process each chapter
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md')).sort();

console.log(`Converting ${files.length} chapters...\n`);

for (const file of files) {
  const name = path.basename(file, '.md');
  const inputPath = path.join(inputDir, file);
  const cleanPath = path.join(tmpDir, file);
  const outputPath = path.join(outputDir, `${name}.pdf`);

  // Read and clean
  const raw = fs.readFileSync(inputPath, 'utf8');
  const cleaned = cleanMyST(raw, inputDir);
  fs.writeFileSync(cleanPath, cleaned);

  // Convert to PDF
  try {
    execSync(`markdown-pdf "${cleanPath}" -o "${outputPath}" -s "${cssFile}"`, { stdio: 'pipe' });
    const size = fs.statSync(outputPath).size;
    console.log(`✅ ${name}.pdf (${(size/1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`❌ ${name}: ${e.message}`);
  }
}

// Cleanup tmp
fs.rmSync(tmpDir, { recursive: true, force: true });
console.log('\nAll done! PDFs in: pdfs/');
