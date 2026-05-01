const puppeteer = require('puppeteer-core');
(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    page.on('console', msg => console.log('CONSOLE[' + msg.type() + ']:', msg.text()));
    page.on('pageerror', err => console.log('PAGEERROR:', err.message));
    await page.goto('http://localhost:24005/', { waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: '/tmp/wattra-hero.png' });
    console.log('Screenshot saved to /tmp/wattra-hero.png');
    await browser.close();
  } catch(e) {
    console.error('Error:', e.message);
  }
})();
