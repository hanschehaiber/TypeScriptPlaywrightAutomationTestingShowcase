import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { CheckoutOverviewPage } from "./checkout.overview.page";

export class CheckoutInfoPage extends BasePage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
  }

  async fillFirstName(firstNameText: string) {
    await this.firstName.fill(firstNameText);
  }
  async fillLastName(lastNameText: string) {
    await this.lastName.fill(lastNameText);
  }
  async fillPostalCode(postalCodeText: string) {
    await this.postalCode.fill(postalCodeText);
  }
  async clickContinue() {
    await this.continueButton.click();
  }
}
