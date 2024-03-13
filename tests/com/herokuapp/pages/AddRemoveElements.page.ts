import { Locator, Page } from "playwright";
import { BasePage } from "./Base.page";

export class AddRemoveElementPage extends BasePage {
    readonly addElement: Locator;

    constructor(page: Page) {
        super(page);
        this.addElement = page.getByRole('button', { name: 'Add Element' });
    }

    async getNumberOfElements(){
        return await this.page.getByRole('button', { name: 'Delete' }).count();
    }

    async deleteButton(buttonIndex: number) {
        await this.page.getByRole('button', { name: 'Delete' }).nth(buttonIndex).click();
    }
}