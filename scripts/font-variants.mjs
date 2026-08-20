/**
 * Builds the site once per font option and screenshots the same three views,
 * so the fonts can be compared on the real pages rather than in a specimen sheet.
 * Restores the original files afterwards.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { chromium } from '/home/claude/node_modules/playwright-core/index.mjs';

const root = process.cwd();
const layoutPath = path.join(root, 'app/layout.js');
const twPath = path.join(root, 'tailwind.config.js');

const originalLayout = fs.readFileSync(layoutPath, 'utf8');
const originalTw = fs.readFileSync(twPath, 'utf8');

const variants = [
  {
    id: 'a-current',
    label: 'Current: Baloo 2 + Poppins',
    imports: [
      "@fontsource/baloo-2/latin-600.css",
      "@fontsource/baloo-2/latin-700.css",
      "@fontsource/baloo-2/latin-800.css",
      "@fontsource/poppins/latin-400.css",
      "@fontsource/poppins/latin-500.css",
      "@fontsource/poppins/latin-600.css",
    ],
    heading: `['"Baloo 2"', 'system-ui', 'sans-serif']`,
    body: `['Poppins', 'system-ui', 'sans-serif']`,
  },
  {
    id: 'b-serif',
    label: 'Editorial: Source Serif 4 + Inter',
    imports: [
      "@fontsource/source-serif-4/latin-600.css",
      "@fontsource/source-serif-4/latin-700.css",
      "@fontsource/inter/latin-400.css",
      "@fontsource/inter/latin-500.css",
      "@fontsource/inter/latin-600.css",
    ],
    heading: `['"Source Serif 4"', 'Georgia', 'serif']`,
    body: `['Inter', 'system-ui', 'sans-serif']`,
  },
  {
    id: 'c-modern',
    label: 'Modern: Plus Jakarta Sans + Inter',
    imports: [
      "@fontsource/plus-jakarta-sans/latin-600.css",
      "@fontsource/plus-jakarta-sans/latin-700.css",
      "@fontsource/plus-jakarta-sans/latin-800.css",
      "@fontsource/inter/latin-400.css",
      "@fontsource/inter/latin-500.css",
      "@fontsource/inter/latin-600.css",
    ],
    heading: `['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']`,
    body: `['Inter', 'system-ui', 'sans-serif']`,
  },
  {
    id: 'd-warm',
    label: 'Warm authority: Fraunces + Source Sans 3',
    imports: [
      "@fontsource/fraunces/latin-600.css",
      "@fontsource/fraunces/latin-700.css",
      "@fontsource/source-sans-3/latin-400.css",
      "@fontsource/source-sans-3/latin-600.css",
    ],
    heading: `['Fraunces', 'Georgia', 'serif']`,
    body: `['"Source Sans 3"', 'system-ui', 'sans-serif']`,
  },
];

const views = [
  { path: '/', name: 'home', scroll: 0 },
  { path: '/', name: 'body', scroll: 1200 },
  { path: '/articles/my-workplace-doesnt-allow-ai/', name: 'article', scroll: 400 },
];

fs.mkdirSync('/tmp/fonts', { recursive: true });

for (const v of variants) {
  // Swap the font imports in layout.js
  let layout = originalLayout;
  const importBlock = v.imports.map((i) => `import '${i}';`).join('\n');
  layout = layout.replace(/^(import '@fontsource[\s\S]*?\.css';\n)+/m, importBlock + '\n');
  fs.writeFileSync(layoutPath, layout);

  // Swap the font families in the tailwind config
  let tw = originalTw;
  tw = tw.replace(/heading: \[[^\]]*\]/, `heading: ${v.heading}`);
  tw = tw.replace(/body: \[[^\]]*\]/, `body: ${v.body}`);
  fs.writeFileSync(twPath, tw);

  execSync('npm run build', { stdio: 'ignore' });

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  for (const view of views) {
    await page.goto('http://127.0.0.1:4321' + view.path, { waitUntil: 'networkidle' });
    await page.evaluate((y) => window.scrollTo(0, y), view.scroll);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `/tmp/fonts/${v.id}-${view.name}.png` });
  }
  await browser.close();
  console.log('done', v.label);
}

fs.writeFileSync(layoutPath, originalLayout);
fs.writeFileSync(twPath, originalTw);
execSync('npm run build', { stdio: 'ignore' });
console.log('restored original fonts');
