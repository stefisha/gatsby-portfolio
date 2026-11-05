const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const publicDir = path.resolve(__dirname, '../public');
const home = fs.readFileSync(path.join(publicDir, 'index.html'), 'utf8');
const notFound = fs.readFileSync(path.join(publicDir, '404.html'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(publicDir, 'manifest.webmanifest'), 'utf8'));

assert.ok(/<html[^>]*lang="en"/.test(home), 'The page must declare its language');
assert.ok(/<title\b[^>]*>[^<]*Stefan Veličković/.test(home), 'The page must have the portfolio title');
assert.ok(/property="og:image"[^>]*content="https:\/\/stefisha\.me\/banner\.jpg"/.test(home), 'Social image must use the live domain');
assert.ok(/property="og:url"[^>]*content="https:\/\/stefisha\.me\/?"/.test(home), 'Social URL must use the live domain');
assert.ok(/name="description"[^>]*content="[^"]+"/.test(home), 'Search description must be present');
assert.ok(/<title\b[^>]*>404/.test(notFound), 'A static 404 document must be generated');
assert.ok(/name="robots"[^>]*content="noindex"/.test(notFound), 'The 404 page should not be indexed');
assert.equal(fs.readFileSync(path.join(publicDir, 'CNAME'), 'utf8').trim(), 'stefisha.me');
assert.equal(manifest.start_url, '/');

// Check local browser resources, including the generated JavaScript bundles.
// Navigation and external links are verified separately in the browser.
let resources = 0;
for (const tag of home.matchAll(/<(?:script|link|img)\b[^>]*>/g)) {
  const attrs = Object.fromEntries([...tag[0].matchAll(/([\w-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
  const ref = attrs.src || attrs.href;
  if (!ref || ref.startsWith('#') || /^(?:https?:|data:|\/\/)/.test(ref)) continue;
  const filename = decodeURIComponent(ref.split(/[?#]/)[0]);
  const resolved = path.resolve(publicDir, filename.replace(/^\//, ''));
  assert.ok(resolved.startsWith(publicDir + path.sep), `Resource escapes public/: ${ref}`);
  assert.ok(fs.existsSync(resolved), `Missing browser resource: ${ref}`);
  resources += 1;
}
assert.ok(resources > 0, 'The generated page must reference local browser resources');
for (const image of ['banner.jpg', 'favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png']) {
  assert.ok(fs.existsSync(path.join(publicDir, image)), `Missing static image: ${image}`);
}
console.log(`Build checks passed: homepage, 404, metadata, domain, manifest and ${resources} local resources.`);
