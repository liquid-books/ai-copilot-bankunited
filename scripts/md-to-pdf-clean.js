#!/usr/bin/env node
/**
 * Preprocesses MyST Markdown → clean Markdown → PDF
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = path.join(__dirname, '..', 'chapters');
const outputDir = path.join(__dirname, '..', 'pdfs');
const tmpDir = path.join(__dirname, '..', '.tmp-clean');

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

/**
 * Convert a MyST list-table block to a GFM markdown table.
 * Input rows look like:
 *   * - col1
 *     - col2
 */
function listTableToMarkdown(tableTitle, body) {
  const rows = [];
  let currentRow = null;

  for (const line of body.split('\n')) {
    const rowStart = line.match(/^\s*\*\s+-\s+(.*)/);
    const colCont = line.match(/^\s+-\s+(.*)/);

    if (rowStart) {
      if (currentRow) rows.push(currentRow);
      currentRow = [rowStart[1].trim()];
    } else if (colCont && currentRow) {
      currentRow.push(colCont[1].trim());
    }
  }
  if (currentRow) rows.push(currentRow);

  if (rows.length === 0) return tableTitle ? `**${tableTitle}**\n` : '';

  const cols = Math.max(...rows.map(r => r.length));
  // Pad rows
  const padded = rows.map(r => { while (r.length < cols) r.push(''); return r; });

  const header = padded[0];
  const separator = header.map(() => '---');
  const body2 = padded.slice(1);

  const lines = [];
  if (tableTitle) lines.push(`\n**${tableTitle}**\n`);
  lines.push('| ' + header.join(' | ') + ' |');
  lines.push('| ' + separator.join(' | ') + ' |');
  for (const row of body2) {
    lines.push('| ' + row.join(' | ') + ' |');
  }
  return lines.join('\n') + '\n';
}

function cleanMyST(content) {
  // 1. Strip YAML frontmatter
  content = content.replace(/^---[\s\S]*?---\n?/, '');

  // 2. Strip download admonition we added (avoid duplication)
  content = content.replace(/\n```\{admonition\} Download this Chapter as PDF[\s\S]*?```\n/g, '');

  // 3. Handle backtick-fenced list-table directives: ```{list-table} Title\n...\n```
  content = content.replace(/```\{list-table\}([^\n]*)\n([\s\S]*?)```/g, (match, title, body) => {
    // Strip directive options lines (:header-rows:, :label:, :widths:, etc.)
    const cleanBody = body.replace(/^:[a-z_-]+:.*$/gm, '').trim();
    return listTableToMarkdown(title.trim(), cleanBody);
  });

  // 4. Handle colon-fenced list-table directives: ::::{list-table}...::::
  content = content.replace(/:{3,}\{list-table\}([^\n]*)\n([\s\S]*?):{3,}/g, (match, title, body) => {
    const cleanBody = body.replace(/^:[a-z_-]+:.*$/gm, '').trim();
    return listTableToMarkdown(title.trim(), cleanBody);
  });

  // 5. Handle figure directives (any number of colons :::+ or backtick-fenced)
  // ::::{figure} path ... ::::
  content = content.replace(/:{3,}\{figure\}\s+([^\n]+)\n([\s\S]*?):{3,}/g, (match, imgPath, attrs) => {
    const altMatch = attrs.match(/:alt:\s*(.+)/);
    const captionMatch = attrs.match(/\n([^:\n][^\n]+)$/m);
    const alt = altMatch ? altMatch[1].trim() : (captionMatch ? captionMatch[1].trim() : 'Figure');
    const cleanPath = imgPath.trim().replace(/^\.\.\//, '');
    return `\n![${alt}](${cleanPath})\n`;
  });

  // 6. Handle admonition directives (any colon depth)
  content = content.replace(/:{3,}\{admonition\}[^\n]*\n([\s\S]*?):{3,}/g, (match, inner) => {
    const lines = inner.trim().split('\n').filter(l => !l.match(/^:[a-z_-]+:/));
    return '\n> ' + lines.join('\n> ') + '\n';
  });

  // 7. Handle other generic directives (note, tip, warning, important, etc.)
  content = content.replace(/:{3,}\{[a-z_-]+\}[^\n]*\n([\s\S]*?):{3,}/g, (match, inner) => {
    const lines = inner.trim().split('\n').filter(l => !l.match(/^:[a-z_-]+:/));
    return '\n> ' + lines.join('\n> ') + '\n';
  });

  // 8. Handle backtick-fenced directives (```{note} etc.)
  content = content.replace(/```\{[a-z_-]+\}[^\n]*\n([\s\S]*?)```/g, (match, inner) => {
    const lines = inner.trim().split('\n').filter(l => !l.match(/^:[a-z_-]+:/));
    return '\n> ' + lines.join('\n> ') + '\n';
  });

  // 9. Strip any leftover ::: or :::: lines
  content = content.replace(/^:{3,}\s*$/gm, '');

  // 10. Strip MyST roles {ref}`, {doc}`, {term}`, {numref}` etc.
  content = content.replace(/\{[a-z_]+\}`([^`]+)`/g, '$1');

  // 11. Strip leftover directive option lines (:label:, :align:, etc.)
  content = content.replace(/^:[a-z_-]+:.*$/gm, '');

  // 12. Clean up excess blank lines
  content = content.replace(/\n{3,}/g, '\n\n');

  return content.trim();
}

// CSS with smaller fonts + page numbers via @page
const cssContent = `
  @page {
    margin: 20mm 18mm;
    @bottom-center {
      content: counter(page) " / " counter(pages);
      font-size: 8pt;
      color: #666;
    }
  }
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 9pt;
    line-height: 1.55;
    color: #1a1a1a;
  }
  h1 {
    font-size: 17pt;
    color: #003087;
    border-bottom: 3px solid #003087;
    padding-bottom: 8px;
    margin-top: 30px;
  }
  h2 {
    font-size: 13pt;
    color: #003087;
    margin-top: 22px;
  }
  h3 {
    font-size: 11pt;
    color: #005eb8;
    margin-top: 16px;
  }
  h4 {
    font-size: 9.5pt;
    color: #005eb8;
  }
  code {
    background: #f4f4f4;
    padding: 1px 5px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 8pt;
  }
  pre {
    background: #f4f4f4;
    padding: 12px;
    border-radius: 5px;
    border-left: 4px solid #003087;
    overflow-x: auto;
    font-size: 8pt;
  }
  blockquote {
    border-left: 4px solid #003087;
    margin: 15px 0;
    padding: 8px 16px;
    background: #f0f4ff;
    color: #333;
    font-style: italic;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 8.5pt;
  }
  th {
    background: #003087;
    color: white;
    padding: 8px 10px;
    text-align: left;
  }
  td {
    padding: 6px 10px;
    border-bottom: 1px solid #ddd;
  }
  tr:nth-child(even) td {
    background: #f9f9f9;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 15px auto;
  }
  a { color: #005eb8; }
  ul, ol { margin: 8px 0; padding-left: 22px; }
  li { margin: 4px 0; }
  strong { color: #003087; }
`;

const cssFile = path.join(tmpDir, 'bankunited-style.css');
fs.writeFileSync(cssFile, cssContent);

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md')).sort();
console.log(`Converting ${files.length} chapters...\n`);

for (const file of files) {
  const name = path.basename(file, '.md');
  const inputPath = path.join(inputDir, file);
  const cleanPath = path.join(tmpDir, file);
  const outputPath = path.join(outputDir, `${name}.pdf`);

  const raw = fs.readFileSync(inputPath, 'utf8');
  const cleaned = cleanMyST(raw);
  fs.writeFileSync(cleanPath, cleaned);

  try {
    execSync(`markdown-pdf "${cleanPath}" -o "${outputPath}" -s "${cssFile}"`, { stdio: 'pipe' });
    const size = fs.statSync(outputPath).size;
    console.log(`✅ ${name}.pdf (${(size/1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`❌ ${name}: ${e.message}`);
  }
}

fs.rmSync(tmpDir, { recursive: true, force: true });
console.log('\nAll done! PDFs in: pdfs/');
