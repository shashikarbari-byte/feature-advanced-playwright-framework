import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { testUsers } from '../../utils/test-data';

test('user can add a product and complete checkout', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(testUsers.validUser.username, testUsers.validUser.password);
  await inventory.expectLoaded();
  await inventory.addProduct('Sauce Labs Backpack');
  await inventory.expectCartCount(1);
  await inventory.openCart();
  await cart.expectProduct('Sauce Labs Backpack');
  await cart.checkout();
  await checkout.complete('Shashi', 'Karbari', '560001');
  await checkout.expectSuccess();
});
