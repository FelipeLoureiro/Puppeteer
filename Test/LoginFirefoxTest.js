const puppeteerFirefox= require('puppeteer-firefox');


(async () => {

    //Browser e sua execulção
    const browser = await puppeteerFirefox.launch({
        headless:false
    });

    //Tamanho de tela
    const page = await browser.newPage({
        "width": 1366,
        "height": 900
    });


    //Vai para a pagina escolha
    await page.goto('https://syscor-homologacao.before.com.br/_sys/escolha.php');
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

    //msg console
    console.log('Login realizado!');

    //screenshot
    await page.screenshot({path: 'example.png'});
    await browser.close();

})();



