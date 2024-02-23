import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class ShoppingCartPage extends BasePage {
  readonly cartItems: Locator;
  readonly checkout: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator("[class='cart_item']");
    this.checkout = page.locator("[data-test='checkout']");
  }
}
