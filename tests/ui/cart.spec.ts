import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { testUsers } from '../../utils/test-data';

test('user can add multiple products to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  await login.goto();
  await login.login(testUsers.validUser.username, testUsers.validUser.password);
  await inventory.addProduct('Sauce Labs Backpack');
  await inventory.addProduct('Sauce Labs Bike Light');
  await inventory.expectCartCount(2);
  await inventory.openCart();
  await expect(page.locator('.cart_item')).toHaveCount(2);
});
