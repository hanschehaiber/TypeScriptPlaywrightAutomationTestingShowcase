import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CheckoutCompletePage extends BasePage {
  readonly page: Page;
  readonly completeText: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.completeText = page.locator("[class='complete-text']");
  }

  async getCompleteText() {
    return await this.completeText.innerText();
  }
}
