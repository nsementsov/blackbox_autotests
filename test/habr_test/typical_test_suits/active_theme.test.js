jest.setTimeout(10000);

/**
 * active theme test suit
 * 
 * @group theme
 */

const MAIN_URL = 'https://habr.com/ru/';

describe('active theme test suit', () => {
    test('development active stream', async () => {
        await page.goto(MAIN_URL);

        await page.waitForSelector('#navbar-links > .nav-links__item:nth-child(2) > .nav-links__item-link')
        await page.click('#navbar-links > .nav-links__item:nth-child(2) > .nav-links__item-link')
        
        await page.waitForSelector('.page-header');
        const theme = await page.$eval('.page-header', text => text.innerText);
        expect(theme).toMatch('Разработка');
    });
    
    test('administration active stream', async () => {
        await page.goto(MAIN_URL);

        await page.waitForSelector('#navbar-links > .nav-links__item:nth-child(3) > .nav-links__item-link')
        await page.click('#navbar-links > .nav-links__item:nth-child(3) > .nav-links__item-link')
        
        await page.waitForSelector('.page-header');
        const theme = await page.$eval('.page-header', text => text.innerText);
        expect(theme).toMatch('Администрирование');
    });
    
    test('design active stream', async () => {
        await page.goto(MAIN_URL);

        await page.waitForSelector('#navbar-links > .nav-links__item:nth-child(4) > .nav-links__item-link')
        await page.click('#navbar-links > .nav-links__item:nth-child(4) > .nav-links__item-link')
        
        await page.waitForSelector('.page-header');
        const theme = await page.$eval('.page-header', text => text.innerText);
        expect(theme).toMatch('Дизайн');
    });
    
    test('management active stream', async () => {
        await page.goto(MAIN_URL);

        await page.waitForSelector('#navbar-links > .nav-links__item:nth-child(5) > .nav-links__item-link')
        await page.click('#navbar-links > .nav-links__item:nth-child(5) > .nav-links__item-link')
        
        await page.waitForSelector('.page-header');
        const theme = await page.$eval('.page-header', text => text.innerText);
        expect(theme).toMatch('Менеджмент');
    });
    
    test('marketing active stream', async () => {
        await page.goto(MAIN_URL);

        await page.waitForSelector('#navbar-links > .nav-links__item:nth-child(6) > .nav-links__item-link')
        await page.click('#navbar-links > .nav-links__item:nth-child(6) > .nav-links__item-link')
        
        await page.waitForSelector('.page-header');
        const theme = await page.$eval('.page-header', text => text.innerText);
        expect(theme).toMatch('Маркетинг');
    });
    
    test('scipop active stream', async () => {
        await page.goto(MAIN_URL);

        await page.waitForSelector('#navbar-links > .nav-links__item:nth-child(7) > .nav-links__item-link')
        await page.click('#navbar-links > .nav-links__item:nth-child(7) > .nav-links__item-link')
        
        await page.waitForSelector('.page-header');
        const theme = await page.$eval('.page-header', text => text.innerText);
        expect(theme).toMatch('Научпоп');
    });
});