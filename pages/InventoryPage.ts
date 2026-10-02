import { expect, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  private title = this.page.locator('[data-test="title"]');
  private cartLink = this.page.locator('[data-test="shopping-cart-link"]');

  async expectLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addProduct(productName: string) {
    const product = this.page.locator('.inventory_item').filter({ hasText: productName });
    await product.getByRole('button', { name: /add to cart/i }).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async expectCartCount(count: number) {
    await expect(this.cartLink.locator('.shopping_cart_badge')).toHaveText(String(count));
  }
}
