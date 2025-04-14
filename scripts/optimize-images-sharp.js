const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/img';
const outputDir = 'src/img/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const inputPath = path.join(inputDir, file);
      const baseName = path.basename(file, path.extname(file));
      
      // Process original format
      sharp(inputPath)
        .resize(800)
        .jpeg({ quality: 80 })
        .png({ quality: 80 })
        .toFile(path.join(outputDir, file))
        .then(() => console.log(`Optimized ${file}`))
        .catch(err => console.error(`Error optimizing ${file}:`, err));

      // Create WebP version
      sharp(inputPath)
        .resize(800)
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${baseName}.webp`))
        .then(() => console.log(`Created WebP version of ${file}`))
        .catch(err => console.error(`Error creating WebP for ${file}:`, err));
    }
  });
});
