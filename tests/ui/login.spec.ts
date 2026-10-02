import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { testUsers } from '../../utils/test-data';

test.describe('Authentication', () => {
  test('valid user can log in', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login(testUsers.validUser.username, testUsers.validUser.password);
    await inventory.expectLoaded();
  });

  test('locked user receives an authentication error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(testUsers.lockedUser.username, testUsers.lockedUser.password);
    await login.expectLoginError('Sorry, this user has been locked out.');
  });
});
