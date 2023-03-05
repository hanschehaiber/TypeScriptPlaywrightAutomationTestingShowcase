import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class CheckoutInfoPage extends BasePage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
  }

  async fillOutAndSubmitCheckoutInfo(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueButton.click();
  }
}
