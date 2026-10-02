import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async complete(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
  }

  async expectSuccess() {
    await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  }
}
