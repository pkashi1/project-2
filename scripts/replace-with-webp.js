#!/usr/bin/env node

/**
 * Replace image references with .webp versions
 * Scans source files and replaces .jpg/.jpeg/.png with .webp
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');

// Check if .webp version exists
function webpExists(imagePath) {
  const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const fullPath = path.join(__dirname, '..', 'public', webpPath);
  return fs.existsSync(fullPath);
}

// Replace image extensions in file content
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Match image paths with extensions
  const regex = /(['"`])([^'"`]*?\.(jpg|jpeg|png))(['"`])/gi;
  
  content = content.replace(regex, (match, quote1, imagePath, ext, quote2) => {
    // Check if webp version exists
    if (webpExists(imagePath)) {
      modified = true;
      const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return `${quote1}${webpPath}${quote2}`;
    }
    return match;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

// Scan directory recursively
function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      count += scanDirectory(filePath);
    } else if (/\.(tsx?|jsx?)$/.test(file)) {
      if (replaceInFile(filePath)) {
        console.log(`✅ Updated: ${filePath.replace(srcDir, 'src')}`);
        count++;
      }
    }
  });
  
  return count;
}

console.log('🔄 Replacing image references with .webp versions...\n');
const updated = scanDirectory(srcDir);

if (updated > 0) {
  console.log(`\n✅ Updated ${updated} file(s)`);
} else {
  console.log('\nℹ️  No files needed updating (or no .webp versions found)');
}
