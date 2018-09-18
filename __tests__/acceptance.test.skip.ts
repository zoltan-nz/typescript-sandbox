import puppeteer, { Browser, Page } from 'puppeteer';

describe.skip('Jest Puppeteer Test', () => {
  let page: Page;
  let browser: Browser;

  const TIMEOUT = 50000;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
    });
    page = await browser.newPage();
  }, TIMEOUT);

  afterAll(async () => {
    await page.close();
    await browser.close();
  }, TIMEOUT);

  test.skip(
    'should display "google" text on page',
    async () => {
      await page.goto('https://google.com');
      await expect(page).toMatch('google');
    },
    TIMEOUT,
  );
});
