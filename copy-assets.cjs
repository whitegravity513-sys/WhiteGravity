const fs = require('fs');
const path = require('path');

const brain = 'C:\\Users\\abhis\\.gemini\\antigravity\\brain\\7663e67c-2264-4777-b156-54b896b8e4b7';
const dest = path.join(__dirname, 'public', 'images');

const files = [
  { src: 'media__1787031199209.jpg',  dst: 'logo-whitegravity.webp',  label: 'Logo' },
  { src: 'media__1787030664573.jpg',  dst: 'service-ecommerce.jpg',   label: 'Ecommerce' },
  { src: 'media__1787030673755.png',  dst: 'service-mobile.jpg',      label: 'Mobile Dev' },
  { src: 'media__1787033642582.jpg',  dst: 'service-crm.jpg',         label: 'CRM (New)' },
  { src: 'media__1787033570198.png',  dst: 'service-marketing.jpg',   label: 'Digital Marketing (SEO)' },
  { src: 'media__1787034327115.png',  dst: 'service-website.jpg',     label: 'Website Development' },
];

console.log('Copying images...');
let ok = 0;

for (const f of files) {
  const srcPath = path.join(brain, f.src);
  const dstPath = path.join(dest, f.dst);
  try {
    fs.copyFileSync(srcPath, dstPath);
    console.log(`✅ ${f.label} copied!`);
    ok++;
  } catch (e) {
    console.log(`❌ ${f.label} failed: ${e.message}`);
  }
}

console.log(`\nAll done! ${ok} images copied.`);
