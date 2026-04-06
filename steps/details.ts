import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I go to inventory page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
});

When('I click on product', async ({ page }) => {
  await page.locator('.inventory_item_name').first().click();
});

Then('url should has inventory-item', async ({ page }) => {
  await expect(page).toHaveURL(/.*\/inventory-item/);
});
