import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd();

Given("I open the Milwaukee website", async ({ page }) => {
  await page.goto("https://www.milwaukeetool.com/");
});

When("I go to the search screen", async ({ page }) => {
  await page.locator('a[href="/search"]').click();
});

Then("I should see the searching bar", async ({ page }) => {
  await expect(page.locator('input[name="search"]').first()).toBeVisible();
});

Then("Url should contain search path", async ({ page }) => {
  await expect(page).toHaveURL(/.*\/search/);
});

When("I go to tab pipeline screen", async ({ page }) => {
  await page.getByRole("link", { name: "New Pipeline" }).click();
});

When("I click on the first product", async ({ page }) => {
  await page.getByTestId("lead-gen-popup-close").click();
  await page.getByText("Four Bay Simultaneous Super Charger").click();
});

Then("Url should contain details path", async ({ page }) => {
  // await page.getByRole('button', { name: 'Product Details' }).click();
  await page.waitForURL(/\/products\/details\//i, { timeout: 30000 });
});
