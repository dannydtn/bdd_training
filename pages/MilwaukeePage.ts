import { Page, expect } from '@playwright/test';

export class MilwaukeePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.milwaukeetool.com/');
  }

  async goToSearch() {
    await this.page.locator('a[href="/search"]').click();
  }

  async goToPipeline() {
    await this.page.getByRole('link', { name: 'New Pipeline' }).click();
  }

  async dismissPopupIfPresent() {
    try {
      const closeBtn = this.page.getByTestId('lead-gen-popup-close');
      if (await closeBtn.isVisible({ timeout: 5000 })) {
        await closeBtn.click();
      }
    } catch {
      // Không có popup, tiếp tục bình thường
    }
  }

  async clickFirstProduct() {
    await this.dismissPopupIfPresent();
    await this.page.getByText('Four Bay Simultaneous Super Charger').click();
  }

  async expectSearchBarVisible() {
    await expect(this.page.locator('input[name="search"]').first()).toBeVisible();
  }

  async expectSearchUrl() {
    await expect(this.page).toHaveURL(/.*\/search/);
  }

  async expectProductDetailsUrl() {
    await this.page.waitForURL(/\/products\/details\//i, { timeout: 30000 });
  }

  async innovations(){
    await this.page.getByText("Portable Productivity.").first().click();
  }
}
