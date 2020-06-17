const puppeteerChrome = require('puppeteer');

(async () => {
    let Login;
    //Browser e sua execulção
    const browser = await puppeteerChrome.launch({
        //headless:false = abre o browser

        //dumpio:true
    });

    //Tamanho de tela
    const page = await browser.newPage({
        width: 1366,
        height: 768,
    });

    //Vai para a pagina escolha
    await page.goto('https://syscor-homologacao.before.com.br/_sys/escolha.php');
    const performanceTiming = JSON.parse(
        await page.evaluate(() => JSON.stringify(window.performance.timing))
    );
    console.log(performanceTiming);

    await page.waitFor('#logUfIdSession', 6000)
    await page.select('#logUfIdSession', '19')
    await page.waitFor('body > section > main > div.conteudo > form > input.submit', 6000)
    await page.click('.submit')

    //Login
    await page.waitFor('#us_email', 5000)
    await page.type('#us_email', 'before.felipe')
    await page.waitFor('#us_senha', 5000)

    await page.type('#us_senha', 'q')
    await page.waitFor('#formLogin > input.submit.entrar', 5000)
    await page.click('#formLogin > input.submit.entrar')
    await page.waitFor('#menu_13 > div > span', 5000)
    await page.screenshot({path: 'example.png'});
    console.log('-> Selecao de UF: ok');

    //msg console
    console.log('-> Login: ok');

    await page.keyboard.up('Shift');
    //screenshot png e pdv
    await page.screenshot({path: 'example.png'});
    //await page.pdf({path: 'example.pdf'});

    console.log('-> Screenshots: ok');
    await browser.close();
})();



