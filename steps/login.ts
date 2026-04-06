import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage';

const { Given, When, Then } = createBdd();

Given('I open the login page', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

When('I fill username {string} and password {string}', async ({ page }, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

Then('I should see the dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.expectDashboardVisible();
});
