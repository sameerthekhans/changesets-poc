const fs = require('fs');

const file = 'CHANGELOG.md';
let content = fs.readFileSync(file, 'utf8');

// Replace "## 1.0.0" with "## What's changed in version 1.0.0"
content = content.replace(
  /^## (\d+\.\d+\.\d+)/gm,
  "## What's changed in version $1"
);

// Remove "### Patch Changes", "### Minor Changes", "### Major Changes"
content = content.replace(/^### (Patch|Minor|Major) Changes\n\n?/gm, '');

fs.writeFileSync(file, content);
