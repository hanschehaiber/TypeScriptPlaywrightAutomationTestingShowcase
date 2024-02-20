import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly username: Locator;
  readonly password: Locator;
  readonly submitLoginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator("[data-test='username']");
    this.password = page.locator("#password");
    this.submitLoginButton = page.locator("#login-button");
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitLoginButton.click();
  }
}
