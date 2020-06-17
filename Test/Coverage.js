const puppeteerChrome = require('puppeteer');

(async () => {
    const pti = require('puppeteer-to-istanbul')
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Enable both JavaScript and CSS coverage
    await Promise.all([
        page.coverage.startJSCoverage(),
        page.coverage.startCSSCoverage()
    ]);
    // Navigate to page
    await page.goto('https://syscor-homologacao.before.com.br/_sys/escolha.php');
    await page.waitFor('#logUfIdSession', 6000)
    // Disable both JavaScript and CSS coverage
    const [jsCoverage, cssCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
        page.coverage.stopCSSCoverage(),
    ]);
    pti.write([...jsCoverage, ...cssCoverage], { includeHostname: true , storagePath: './coverage' })
    await browser.close()
})()