const puppeteerChrome = require('puppeteer');

(async () => {
    //Browser e sua execulção
    const browser = await puppeteerChrome.launch({
        "heandless": false,
        //"slowMo": 50
    });

    //Tamanho de tela
    const page = await browser.newPage({
        "width": 1366,
        "height": 768
    });

    await page.tracing.start({path: 'trace.json'});
    await page.goto('https://syscor-homologacao.before.com.br/_sys/escolha.php');
    await page.tracing.stop();
    console.log('ok');

})()