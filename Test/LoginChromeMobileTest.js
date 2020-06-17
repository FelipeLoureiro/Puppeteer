
const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone X'];

(async () => {

    //Browser e sua execulção
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Emula por modelo
    await page.emulate(iPhone);

    //Vai para a pagina escolha
    await page.goto('https://syscor-homologacao.before.com.br/_sys/escolha.php');
    await page.waitFor('#logUfIdSession', 6000)

    await page.screenshot({path: 'example.png'});
    await browser.close();

})();



