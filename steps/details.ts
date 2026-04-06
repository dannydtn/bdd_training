import { createBdd } from 'playwright-bdd';
import { InventoryPage } from '../pages/InventoryPage';

const { Given, When, Then } = createBdd();

Given('I go to inventory page', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.goto();
});

When('I click on product', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.clickFirstProduct();
});

Then('url should has inventory-item', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.expectProductDetailUrl();
});
