// const puppeteer = require('puppeteer');
jest.setTimeout(30000);

/**
 * find ru article
 * 
 * @group search_ru_e2e
 */

describe('find ru article', () => {
    // let browser, page;
    // beforeAll(async () => {
    //     browser = await puppeteer.launch({
    //         headless: false,
    //         slowMo: 80
    //     });
    //     page = await browser.newPage();
    // });
    // afterAll(async () => {
    //     await browser.close();
    // });
    test('find puppeteer article', async () => {
        await page.goto('https://habr.com/ru');

        await page.waitForSelector('#search-form-btn');
        await page.click('#search-form-btn');
        await page.waitForSelector('#search-form-field');
        await page.click('#search-form-field');
        await page.type('#search-form-field', 'puppeteer\n');
        
        await page.waitForSelector('#post_342578 > .post > .post__title > .post__title_link > .searched-item');
        await page.click('#post_342578 > .post > .post__title > .post__title_link > .searched-item');

        await page.waitForSelector('.post__title-text');
        const title = await page.$eval('.post__title-text', title => title.innerText);
        expect(title).toMatch('Jest и Puppeteer: автоматизация тестирования веб-интерфейсов');
    });
});