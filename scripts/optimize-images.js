#!/usr/bin/env node

/**
 * Image Optimization Script with Auto-Compression
 * 
 * Install sharp: npm install --save-dev sharp
 * Run: node scripts/optimize-images.js
 * Compress: node scripts/optimize-images.js --compress
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
const sizeThreshold = 500 * 1024; // 500KB
const shouldCompress = process.argv.includes('--compress');

function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2);
}

function scanDirectory(dir, results = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath, results);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        const size = stat.size;
        if (size > sizeThreshold) {
          results.push({
            path: filePath,
            relativePath: filePath.replace(publicDir, ''),
            size: getFileSizeInKB(filePath),
            ext: ext
          });
        }
      }
    }
  });

  return results;
}

async function compressImages(images) {
  try {
    const sharp = (await import('sharp')).default;
    
    console.log('\n🔧 Compressing images...\n');
    
    for (const img of images) {
      const originalSize = parseFloat(img.size);
      const outputPath = img.path.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      try {
        await sharp(img.path)
          .webp({ quality: 75 })
          .toFile(outputPath);
        
        const newSize = getFileSizeInKB(outputPath);
        const savings = ((originalSize - parseFloat(newSize)) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${img.relativePath}`);
        console.log(`   ${originalSize} KB → ${newSize} KB (${savings}% smaller)\n`);
      } catch (err) {
        console.log(`❌ Failed: ${img.relativePath} - ${err.message}`);
      }
    }
    
    console.log('✅ Compression complete!');
  } catch (err) {
    console.error('\n❌ Sharp not installed. Run: npm install --save-dev sharp');
  }
}

console.log('🔍 Scanning for large images...\n');
const largeImages = scanDirectory(publicDir);

if (largeImages.length === 0) {
  console.log('✅ No large images found (all under 500KB)');
} else {
  console.log(`⚠️  Found ${largeImages.length} images over 500KB:\n`);
  
  largeImages
    .sort((a, b) => parseFloat(b.size) - parseFloat(a.size))
    .slice(0, 20)
    .forEach(img => {
      console.log(`  ${img.relativePath} - ${img.size} KB`);
    });

  if (largeImages.length > 20) {
    console.log(`  ... and ${largeImages.length - 20} more`);
  }

  console.log('\n📝 Recommendations:');
  console.log('  1. Run: node scripts/optimize-images.js --compress');
  console.log('  2. Or use TinyPNG/Squoosh manually');
  console.log('  3. Convert to WebP format (75% quality recommended)');
  console.log('  4. Expected savings: 60-80% file size reduction');
  
  if (shouldCompress) {
    await compressImages(largeImages);
  }
}
