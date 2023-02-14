import { Locator, Page } from "@playwright/test";
import { ShoppingCart } from "./shopping.cart.page";

export abstract class BasePage {
  readonly page: Page;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = page.locator("[class='shopping_cart_link']");
  }

  async clickShoppingCart() {
    await this.shoppingCart.click();
  }
}
