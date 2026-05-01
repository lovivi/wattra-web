const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  page.setViewport({ width: 1440, height: 900 });
  page.on('console', msg => console.log('CONSOLE[' + msg.type() + ']:', msg.text()));
  page.on('pageerror', err => console.log('PAGEERROR:', err.message));
  await page.goto('http://localhost:24005/', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForTimeout(3000);
  const html = await page.content();
  console.log('Has "Power the":', html.includes('Power the'));
  console.log('Has "WATTRA":', html.includes('WATTRA'));
  await page.screenshot({ path: '/tmp/wattra-hero.png', fullPage: false });
  console.log('Screenshot saved');
  await browser.close();
})();
