jest.setTimeout(100000);

describe('Jest Puppeteer Test', () => {
  test('should display "google" text on page', async () => {
    await page.goto('https://google.com');
    await expect(page).toMatch('google');
  });
});
