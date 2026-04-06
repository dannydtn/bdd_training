import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I open the login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('I fill username and password', async ({ page }, table) => {
  const data = table.hashes();

  for (const row of data) {

  const field = row.field;
  const value = row.value;
  
  await page.locator('[data-test="username"]').fill(field);
  await page.locator('[data-test="password"]').fill(value);
  }
  await page.locator('[data-test="login-button"]').click();
});

Then('I should see the dashboard', async ({ page }) => {
  await expect(page.locator('.inventory_container')).toBeVisible();
});
