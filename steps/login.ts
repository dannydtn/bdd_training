import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I open the login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('I fill {string} as username and {string} as password', async ({ page }, user: string, pass: string) => {
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').fill(pass);
  await page.locator('[data-test="login-button"]').click();
});

Then('I should see the dashboard', async ({ page }) => {
  await expect(page.locator('.inventory_container')).toBeVisible();
});
