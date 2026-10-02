import { expect, Page } from '@playwright/test';

export class CartPage {
  private readonly checkoutButton;

  constructor(private readonly page: Page) {
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  async expectProduct(productName: string) {
    await expect(this.page.locator('.cart_item')).toContainText(productName);
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}