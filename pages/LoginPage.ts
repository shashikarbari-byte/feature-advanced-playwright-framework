import { expect, Page } from '@playwright/test';

export class LoginPage {
  private readonly username;
  private readonly password;
  private readonly loginButton;
  private readonly errorMessage;

  constructor(private readonly page: Page) {
    this.username = this.page.locator('[data-test="username"]');
    this.password = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
    this.errorMessage = this.page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async expectLoginError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }
}