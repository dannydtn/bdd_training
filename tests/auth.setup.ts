import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('https://saucedemo.com/');   // ← thay bằng link login thật của bạn

  // Điền thông tin đăng nhập (thay selector cho đúng với trang của bạn)
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Đợi login thành công
  await page.waitForURL('**/inventory.html');   // hoặc trang sau khi login

  // Lưu trạng thái đăng nhập
  await page.context().storageState({ path: authFile });

  console.log('✅ Đã lưu auth thành công!');
});