import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://www.guinness.diageo.site/en/home');
  await page.getByLabel('Remember me on this device (').check();
  await page.getByLabel('Remember me on this device (').uncheck();
  await page.getByPlaceholder('DD').click();
  await page.getByPlaceholder('DD').fill('06');
  await page.getByPlaceholder('DD').press('Tab');
  await page.getByPlaceholder('MM').fill('08');
  await page.getByPlaceholder('MM').press('Tab');
  await page.getByPlaceholder('YYYY').fill('1985');
  await page.locator('#age-gate-overlay').click();
  await page.locator('.md\\:bg-gradient-corner').click();
  await expect(page.locator('#header')).toContainText('SETTLE INTO THE WORLD OF GUINNESS. OVER 260 YEARS IN THE MAKING.');
});
