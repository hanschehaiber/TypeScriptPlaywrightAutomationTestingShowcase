import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { CheckoutCompletePage } from "./checkout.complete.page";

export class CheckoutOverviewPage extends BasePage {
  readonly subtotal: Locator;
  readonly finish: Locator;

  constructor(page: Page) {
    super(page);
    this.subtotal = page.locator("[class=summary_subtotal_label]");
    this.finish = page.locator("#finish");
  }

  async getSubtotal() {
    return await this.subtotal.innerText();
  }
}
