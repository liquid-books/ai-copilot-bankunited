#!/usr/bin/env node
/**
 * Adds a PDF download button to each chapter's frontmatter/content
 * Uses MyST markdown download link syntax
 */

const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, '..', 'chapters');
const baseRawUrl = 'https://github.com/liquid-books/ai-copilot-bankunited/raw/main/pdfs';

const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.md')).sort();

for (const file of files) {
  const name = path.basename(file, '.md');
  const filePath = path.join(chaptersDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  const pdfUrl = `${baseRawUrl}/${name}.pdf`;
  const downloadBadge = `\n```{admonition} 📥 Download this Chapter\n:class: tip\n\n[⬇️ Download as PDF](${pdfUrl})\n\`\`\`\n`;

  // Check if already added
  if (content.includes('Download this Chapter')) {
    console.log(`⏭️  ${name} — already has download link`);
    continue;
  }

  // Insert after the frontmatter (after closing ---) and before the first heading or content
  if (content.startsWith('---')) {
    // Find end of frontmatter
    const fmEnd = content.indexOf('\n---\n', 4);
    if (fmEnd !== -1) {
      content = content.slice(0, fmEnd + 5) + downloadBadge + content.slice(fmEnd + 5);
    }
  } else {
    content = downloadBadge + content;
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ ${name} — download link added`);
}

console.log('\nDone!');
