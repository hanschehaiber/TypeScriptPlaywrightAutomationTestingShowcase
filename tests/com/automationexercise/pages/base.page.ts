import { Locator, Page } from '@playwright/test'

export abstract class BasePage {
    readonly page: Page;
    readonly loggedInUserName: (name: string) => Locator;

    constructor(page: Page) {
        this.page = page;
        this.loggedInUserName = (name: string) => {
            return page.locator('li').filter({ hasText: `Logged in as ${name}` });
        }
    }
}