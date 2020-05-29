const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

jest.setTimeout(10000);

/**
 * snapshot tests
 * 
 * @group snap
 */

describe('snapshot tests', () => {
    test('main page snapshot test', async () => {
        await page.goto('https://habr.com/ru');

        let mainPageImage = await page.screenshot({clip: {x: 0, y: 0, width: 680, height: 350}});
        expect(mainPageImage).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
          });
    });

    test('q&a snapshot test', async () => {
        await page.goto('https://qna.habr.com/');

        let mainPageImage = await page.screenshot({clip: {x: 0, y: 10, width: 680, height: 350}});
        expect(mainPageImage).toMatchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
          });
    });
});