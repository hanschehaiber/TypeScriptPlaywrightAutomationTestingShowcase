import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { CheckoutCompletePage } from "./checkout.complete.page";

export class CheckoutOverviewPage extends BasePage {
  readonly page: Page;
  readonly subtotal: Locator;
  readonly finish: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.subtotal = page.locator("[class=summary_subtotal_label]");
    this.finish = page.locator("#finish");
  }

  async getSubtotal() {
    return await this.subtotal.innerText();
  }
  async clickFinish() {
    await this.finish.click();
  }
}
