const puppeteerChromeMobile = require('puppeteer');

(async () => {

    //Browser e sua execulção
    const browser = await puppeteerChromeMobile.launch({
        "heandless": false,
        //"slowMo": 50
    });
    const page = await browser.newPage({
        "width": 1366,
        "height": 768
    });

    //Vai para a pagina escolha
    await page.goto('https://image.online-convert.com/convert-to-png');

    const [fileChooser] = await Promise.all([
        page.waitForFileChooser(),
        page.waitFor('#fileUploadButton', 5000),
        page.click('#fileUploadButton'), // some button that triggers file selection
    ]);

    await fileChooser.accept(['/home/felipe/PhpstormProjects/Puppeteer/Test/Evernote_Icon.png']);
    await page.waitFor('#fileUploadList', 6000);
    await page.waitFor('#fileUploadList > div > div.col-xl-4.col-lg-5.col-md-6.col-6.file-size.list-element > span > i', 6000);
    await page.screenshot({path: 'example.png'});

    console.log('Arquivo selecionado!');
    await browser.close();
    //home/felipe/PhpstormProjects/Puppeteer/Test/Evernote_Icon.png

})()
