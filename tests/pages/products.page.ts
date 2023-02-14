import { Locator, Page } from "playwright-core";
import { BasePage } from "./base.page";

export class ProductsPage extends BasePage {
  readonly page: Page;
  readonly inventoryItems: Locator;
  readonly itemPriceSelector = "[class='inventory_item_price']";
  readonly addToCartSelector = "#add-to-cart-sauce-labs-backpack";

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.inventoryItems = page.locator("[class='inventory_list'] > div");
  }

  async getFirstProductPrice() {
    return await this.inventoryItems
      .first()
      .locator(this.itemPriceSelector)
      .innerText();
  }
  async addFirstProductToCart() {
    await this.inventoryItems.first().locator(this.addToCartSelector).click();
  }
}
