import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ShoppingCart extends BasePage {
  readonly cartItems: Locator;
  readonly checkout: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator("[class='cart_item']");
    this.checkout = page.locator("[data-test='checkout']");
  }

  async getNumberOfItemsInCart() {
    return await this.cartItems.count();
  }

  async clickCheckout() {
    await this.checkout.click();
  }
}
