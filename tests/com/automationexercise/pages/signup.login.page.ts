import { Locator, Page } from '@playwright/test';
import { BasePage } from "./base.page";


export class SignupLoginPage extends BasePage {
    readonly signupEmail: Locator;
    readonly signupName: Locator;
    readonly signupButton: Locator;
    readonly loginPassword: Locator;
    readonly loginEmail: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.signupEmail = page.locator("[data-qa='signup-email']");
        this.signupName = page.locator("[data-qa='signup-name']");
        this.signupButton = page.locator("[data-qa='signup-button']");
        this.loginPassword = page.locator("[data-qa='login-password']");
        this.loginEmail = page.locator("[data-qa='login-email']");
        this.loginButton = page.locator("[data-qa='login-button']");
    }
}