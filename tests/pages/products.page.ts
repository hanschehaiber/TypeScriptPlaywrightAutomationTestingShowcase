import { Locator, Page } from "playwright-core";

export class ProductsPage {
  readonly page: Page;
  readonly inventoryItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator("[class='inventory_list'] > div");
  }
}
