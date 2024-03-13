import { Locator, Page } from "playwright";
import { BasePage } from "./Base.page";

export class HomePage extends BasePage {
    readonly addElement: Locator;

    constructor(page: Page) {
        super(page);
        this.addElement = page.getByRole('link', { name: 'Add/Remove Elements' })
    }

}