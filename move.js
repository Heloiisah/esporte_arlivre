const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src/app/component/atleta-component');
const destDir = path.join(__dirname, 'src/app/component/atleta');
const dest = path.join(destDir, 'atleta-component');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.renameSync(src, dest);
console.log('Moved successfully!');
