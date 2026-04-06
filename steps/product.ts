import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I open the Milwaukee website', async ({ page }) => {
  await page.goto('https://www.milwaukeetool.com/');
});

When('I go to the search screen', async ({ page }) => {
  await page.locator('a[href="/search"]').click();
});

Then('I should see the searching bar', async ({ page }) => {
  await expect(page.locator('input[name="search"]').first()).toBeVisible();
});

Then('Url should has search', async ({ page }) => {
  await expect(page).toHaveURL(/.*\/search/);
});

