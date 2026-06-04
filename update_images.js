const fs = require('fs');
const filepath = "c:\\Users\\sin14\\OneDrive\\เดสก์ท็อป\\WebMoon\\Version2\\image-config.js";

let content = fs.readFileSync(filepath, 'utf-8');
const pattern = /(\{\s*x:\s*-?\d+,\s*y:\s*-?\d+,\s*zoom:\s*[\d\.]+\s*)(\})/g;
content = content.replace(pattern, '$1, aspectRatio: "original" $2');

fs.writeFileSync(filepath, content, 'utf-8');
