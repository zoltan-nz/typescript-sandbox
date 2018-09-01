import puppeteer from 'puppeteer';

let page;

describe('Jest Puppeteer Test', () => {
  beforeAll(async () => {
    const browser = await puppeteer.launch({
      // headless: false
    });
    page = await browser.newPage();
    await page.goto('https://google.com');
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });
});
