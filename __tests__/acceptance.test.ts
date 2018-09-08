import puppeteer, { Browser, Page } from 'puppeteer';

describe('Jest Puppeteer Test', () => {
  let page: Page;
  let browser: Browser;

  const TIMEOUT = 5000;

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

  it(
    'should display "google" text on page',
    async () => {
      await page.goto('https://google.com');
      await expect(page).toMatch('google');
    },
    TIMEOUT,
  );
});
