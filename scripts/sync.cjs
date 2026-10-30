const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dRoot = path.resolve(__dirname, '..');
const cRoot = 'C:/Users/Admin/Desktop/WhiteGravity/WhiteGravity';

const dDist = path.join(dRoot, 'dist');
const cDist = path.join(cRoot, 'dist');

const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

ErrorDocument 404 /index.html
`;

if (fs.existsSync(dDist)) {
  fs.writeFileSync(path.join(dDist, '.htaccess'), htaccessContent, 'utf8');
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(cRoot)) {
  copyDir(dDist, cDist);
}

const dZip = path.join(dRoot, 'dist.zip');
const cZip = path.join(cRoot, 'dist.zip');

if (fs.existsSync(dZip)) fs.unlinkSync(dZip);
if (fs.existsSync(cZip)) fs.unlinkSync(cZip);

const psCmd = `Get-ChildItem -Path '${dDist}' -Force | Compress-Archive -DestinationPath '${dZip}' -Force`;
execSync(`powershell -NoProfile -Command "${psCmd}"`, { stdio: 'inherit' });

if (fs.existsSync(cRoot)) {
  fs.copyFileSync(dZip, cZip);
}
