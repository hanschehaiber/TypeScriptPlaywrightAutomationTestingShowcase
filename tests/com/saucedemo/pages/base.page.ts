import { Locator, Page } from "@playwright/test";

export abstract class BasePage {
  readonly page: Page;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.locator("[class='shopping_cart_link']");
  }
}
