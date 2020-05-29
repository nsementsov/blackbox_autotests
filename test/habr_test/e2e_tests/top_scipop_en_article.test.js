jest.setTimeout(30000);

/**
 * top scipop en article
 * 
 * @group scipop_e2e
 */


describe('top scipop en article', () => {
    test('switch language and open 1st top alltime scipop article', async () => {
        await page.goto('https://habr.com/ru');

        await page.waitForSelector('.btn_navbar_lang');
        await page.click('.btn_navbar_lang');
        
        await page.waitForSelector('label[for="hl_langs_en"]');
        await page.click('label[for="hl_langs_en"]');
        await page.click('.form__footer > button');

        await page.waitForSelector('a[href="https://habr.com/en/flows/popsci/"]');
        await page.click('a[href="https://habr.com/en/flows/popsci/"]');

        await page.waitForSelector('.tabs > .tabs__level:nth-child(2) > .toggle-menu > .toggle-menu__item:nth-child(2) > .toggle-menu__item-link');
        await page.click('.tabs > .tabs__level:nth-child(2) > .toggle-menu > .toggle-menu__item:nth-child(2) > .toggle-menu__item-link');
        await page.waitForSelector('.tabs > .tabs__level > .toggle-menu > .toggle-menu__item:nth-child(4) > .toggle-menu__item-link');
        await page.click('.tabs > .tabs__level > .toggle-menu > .toggle-menu__item:nth-child(4) > .toggle-menu__item-link');

        await page.waitForSelector('#post_437912');
        await page.click('#post_437912 > .post > .post__title > .post__title_link');

        await page.waitForSelector('.post__title-text');
        const title = await page.$eval('.post__title-text', title => title.innerText);
        expect(title).toMatch('A small notebook for a system administrator');
    });
});