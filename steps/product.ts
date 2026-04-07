import { createBdd } from 'playwright-bdd';
import { MilwaukeePage } from '../pages/MilwaukeePage';
import {test, expect} from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I open the Milwaukee website', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await milwaukeePage.goto();
});

When('I go to the search screen', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await milwaukeePage.goToSearch();
});

Then('I should see the searching bar', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await milwaukeePage.expectSearchBarVisible();
});

Then('Url should contain search path', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await milwaukeePage.expectSearchUrl();
});

When('I go to tab pipeline screen', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await milwaukeePage.goToPipeline();
});

When('I click on the first product', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await page.getByTestId("lead-gen-popup-close").click();
  await milwaukeePage.clickFirstProduct();
});

Then('Url should contain details path', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await milwaukeePage.expectProductDetailsUrl();
});

When('I go to M18 innovations', async ({ page }) => {
  const milwaukeePage = new MilwaukeePage(page);
  await milwaukeePage.innovations();
  await page.waitForTimeout(3000);
});

Then('Display match with image design', async ({ page }) => {  
  await page.waitForTimeout(3000);
  await page.addStyleTag({
     content: `
    body {overflow: hidden !important;}`
  })
  await expect(page).toHaveScreenshot('./img/img1.png');
});