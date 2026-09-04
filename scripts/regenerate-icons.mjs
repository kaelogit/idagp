import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const source = path.join(root, 'public', 'logo.png');

/** Turn near-black background pixels transparent; keep blue globe intact. */
async function transparentLogo(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Pure/near-black background
    if (max <= 28) {
      data[i + 3] = 0;
      continue;
    }

    // Dark edge halos between black and blue
    if (max <= 55 && b <= max + 8 && r <= 40 && g <= 40) {
      const fade = Math.min(1, (max - 20) / 35);
      data[i + 3] = Math.round(data[i + 3] * fade);
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

async function writePng(pipeline, outPath, size) {
  await pipeline.clone().resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(outPath);
  console.log(`wrote ${path.relative(root, outPath)} (${size}x${size})`);
}

async function main() {
  const base = await transparentLogo(source);

  // Nav + shared logo asset
  await base.clone().png().toFile(source);

  const outputs = [
    ['public/favicon-16x16.png', 16],
    ['public/favicon-32x32.png', 32],
    ['public/icon-48.png', 48],
    ['public/apple-touch-icon.png', 180],
    ['public/icon-192.png', 192],
    ['public/icon-512.png', 512],
    ['src/app/icon.png', 32],
  ];

  for (const [rel, size] of outputs) {
    await writePng(base, path.join(root, rel), size);
  }

  const fav16 = await sharp(path.join(root, 'public/favicon-16x16.png')).png().toBuffer();
  const fav32 = await sharp(path.join(root, 'public/favicon-32x32.png')).png().toBuffer();
  const ico = await toIco([fav16, fav32]);
  fs.writeFileSync(path.join(root, 'public/favicon.ico'), ico);
  console.log('wrote public/favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
