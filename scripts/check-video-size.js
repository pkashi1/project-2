#!/usr/bin/env node

/**
 * Video Size Checker
 * Checks if videos are optimized for web
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
const sizeThreshold = 5 * 1024 * 1024; // 5MB

function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

function scanForVideos(dir, results = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanForVideos(filePath, results);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (videoExtensions.includes(ext)) {
        const size = stat.size;
        results.push({
          path: filePath.replace(publicDir, ''),
          size: getFileSizeInMB(filePath),
          sizeBytes: size,
          ext: ext,
          isLarge: size > sizeThreshold
        });
      }
    }
  });

  return results;
}

console.log('🎥 Scanning for videos...\n');
const videos = scanForVideos(publicDir);

if (videos.length === 0) {
  console.log('ℹ️  No videos found');
} else {
  console.log(`Found ${videos.length} video(s):\n`);
  
  videos.forEach(video => {
    const icon = video.isLarge ? '⚠️ ' : '✅';
    console.log(`${icon} ${video.path} - ${video.size} MB`);
  });

  const largeVideos = videos.filter(v => v.isLarge);
  
  if (largeVideos.length > 0) {
    console.log(`\n⚠️  ${largeVideos.length} video(s) over 5MB detected\n`);
    console.log('📝 Recommendations:');
    console.log('  1. Compress with HandBrake or ffmpeg');
    console.log('  2. Target: H.264 codec, CRF 28, 1080p max');
    console.log('  3. Example ffmpeg command:');
    console.log('     ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset fast output.mp4');
    console.log('  4. Expected: 60-80% size reduction');
  } else {
    console.log('\n✅ All videos are optimized (<5MB)');
  }
}
