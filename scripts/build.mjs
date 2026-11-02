// Production build: copies the static game into dist/ and vendors three.js
// so the deployed site has no runtime dependency on a CDN for the 3D engine.
// All paths in index.html are relative, so dist/ works under any base path
// (for example https://ashwin.top/pool-game/).
import { cpSync, mkdirSync, rmSync, copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const threeSrc = join(root, 'node_modules', 'three', 'build', 'three.min.js');

if (!existsSync(threeSrc)) {
  console.error('three.js not found. Run "npm ci" first.');
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(join(dist, 'vendor'), { recursive: true });
cpSync(join(root, 'src'), dist, { recursive: true });
copyFileSync(threeSrc, join(dist, 'vendor', 'three.min.js'));
writeFileSync(join(dist, '.nojekyll'), '');
console.log('Built dist/');
