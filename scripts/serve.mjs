// Local preview of dist/ under the same base path as production: http://localhost:4173/pool-game/
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = '/pool-game/';
const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
const port = Number(process.env.PORT) || 4173;

createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url === BASE.slice(0, -1)) { res.writeHead(301, { Location: BASE }); return res.end(); }
  if (!url.startsWith(BASE)) { res.writeHead(404); return res.end('Not found'); }
  let rel = url.slice(BASE.length) ? normalize(url.slice(BASE.length)).replace(/^(\.\.[/\\])+/, '') : '';
  if (rel === '' || rel.endsWith('/')) rel += 'index.html';
  try {
    const body = await readFile(join(dist, rel));
    res.writeHead(200, { 'Content-Type': types[extname(rel)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end('Not found');
  }
}).listen(port, () => console.log(`Serving http://localhost:${port}${BASE}`));
