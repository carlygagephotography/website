const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

const jobs = [
  { input: 'images/planetblue038.jpg', output: 'images/optimized/planetblue038.webp', width: 1600, quality: 82 },
  { input: 'images/bento-1.jpg', output: 'images/optimized/bento-1.webp', width: 1600, quality: 80 },
  { input: 'images/bento-2.jpg', output: 'images/optimized/bento-2.webp', width: 1600, quality: 80 },
  { input: 'images/bento-3.jpg', output: 'images/optimized/bento-3.webp', width: 1600, quality: 80 },
  { input: 'images/bento-4.jpg', output: 'images/optimized/bento-4.webp', width: 1600, quality: 80 },
  { input: 'images/bento-5.jpg', output: 'images/optimized/bento-5.webp', width: 1600, quality: 80 },
  { input: 'images/hero-2.jpg', output: 'images/optimized/hero-2.webp', width: 1800, quality: 82 },
  { input: 'images/hero-3.jpg', output: 'images/optimized/hero-3.webp', width: 1800, quality: 82 },
  { input: 'images/tiff-holiday-photos017.jpg', output: 'images/optimized/tiff-holiday-photos017.webp', width: 1800, quality: 82 }
];

async function ensureDir(filePath) {
  await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
}

async function optimize(job) {
  const inputPath = path.join(publicDir, job.input);
  const outputPath = path.join(publicDir, job.output);
  await ensureDir(outputPath);

  const before = (await fs.promises.stat(inputPath)).size;

  await sharp(inputPath)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(outputPath);

  const after = (await fs.promises.stat(outputPath)).size;
  const savedPct = ((1 - after / before) * 100).toFixed(1);
  console.log(`${job.input} -> ${job.output} | ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB | saved ${savedPct}%`);
}

(async () => {
  for (const job of jobs) {
    await optimize(job);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
