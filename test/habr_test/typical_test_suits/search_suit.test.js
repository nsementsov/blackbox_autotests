jest.setTimeout(10000);

/**
 * search test suit
 * 
 * @group search
 */

const SEARCH_URL = 'https://habr.com/ru/search/';

describe('search test suit', () => {
    describe('positive tests', () => {
        test('valid search for "google"', async () => {
            await page.goto(SEARCH_URL);
    
            await page.waitForSelector('.search-field__input');
            await page.click('.search-field__input');
            await page.type('.search-field__input', 'google\n');
    
            await page.waitForSelector('.tabs-menu__item-counter');
            let count = await page.$eval('.tabs-menu__item-counter', count => count.innerText);
            expect(parseInt(count)).toBeGreaterThan(200);
        });
    });

    describe('negative tests', () => {
        test('invalid search with numbers "321456"', async () => {
            await page.goto(SEARCH_URL);
    
            await page.waitForSelector('.search-field__input');
            await page.click('.search-field__input');
            await page.type('.search-field__input', '321456\n');
    
            await page.waitForSelector('.alter_search');
            let noResults = await page.$eval('.alter_search', count => count.innerText);
            expect(noResults).toMatch('Search «321456» on Habr Q&A or try to use Yandex or Google.');
        });
    
        test('invalid search with script injection', async () => {
            await page.goto(SEARCH_URL);
    
            await page.waitForSelector('.search-field__input');
            await page.click('.search-field__input');
            await page.type('.search-field__input', '<script>alert(1)</script>\n');
    
            await page.waitForSelector('.tabs-menu__item-counter');
            let count = await page.$eval('.tabs-menu__item-counter', count => count.innerText);
            expect(parseInt(count)).toBeGreaterThan(0);
        });
    });
});