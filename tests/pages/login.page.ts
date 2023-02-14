import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { ProductsPage } from "./products.page";

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitLoginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.username = page.locator("[data-test='username']");
    this.password = page.locator("#password");
    this.submitLoginButton = page.locator("#login-button");
  }
  async fillUsername(username: string) {
    await this.username.waitFor();
    await this.username.fill(username);
  }
  async fillPassword(password: string) {
    await this.password.fill(password);
  }
  async submitLogin() {
    await this.submitLoginButton.click();
  }
  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submitLogin();
  }
}
