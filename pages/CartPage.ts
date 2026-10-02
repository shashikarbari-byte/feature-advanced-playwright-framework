import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  private checkoutButton = this.page.locator('[data-test="checkout"]');

  async expectProduct(productName: string) {
    await expect(this.page.locator('.cart_item')).toContainText(productName);
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
