import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async clickFirstProduct() {
    await this.page.locator('.inventory_item_name').first().click();
  }

  async expectProductDetailUrl() {
    await expect(this.page).toHaveURL(/.*\/inventory-item/);
  }
}
