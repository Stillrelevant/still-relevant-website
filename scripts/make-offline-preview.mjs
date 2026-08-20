/**
 * Makes a double-clickable offline copy of the built site in ./preview.
 * Rewrites root-absolute paths to relative ones so index.html works from disk.
 * The real deployment uses ./out unchanged.
 */
import fs from 'fs';
import path from 'path';

const src = path.join(process.cwd(), 'out');
const dest = path.join(process.cwd(), 'preview');

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });

const htmlFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
})(dest);

const knownRoots = new Set(fs.readdirSync(dest));

for (const file of htmlFiles) {
  const depth = path.relative(dest, path.dirname(file)).split(path.sep).filter(Boolean).length;
  const up = depth === 0 ? './' : '../'.repeat(depth);
  let html = fs.readFileSync(file, 'utf8');

  // Asset and page links: /_next/... , /og.svg , /about/ , /articles/foo/
  html = html.replace(/(href|src)="\/([^"?#]*)([^"]*)"/g, (match, attr, target, suffix) => {
    if (target === '') return `${attr}="${up}index.html${suffix}"`;
    const root = target.split('/')[0];
    if (!knownRoots.has(root)) return match;
    const isFile = path.extname(target) !== '';
    const rel = isFile ? `${up}${target}` : `${up}${target.replace(/\/$/, '')}/index.html`;
    return `${attr}="${rel}${suffix}"`;
  });

  fs.writeFileSync(file, html);
}

fs.writeFileSync(
  path.join(dest, 'READ-ME-FIRST.txt'),
  [
    'Still Relevant: offline preview',
    '',
    'Double-click index.html to open the site in your browser.',
    'Every page and link works. This copy is for reading only.',
    '',
    'The version that gets deployed is the "out" folder in the built zip,',
    'or the source project, which is what goes on GitHub and Vercel.',
    '',
  ].join('\n')
);

console.log(`Rewrote ${htmlFiles.length} pages into ./preview`);
