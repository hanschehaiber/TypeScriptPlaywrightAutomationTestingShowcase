import { SignupLoginPage } from './pages/signup.login.page';
import { test } from '@playwright/test';

test.describe('Test Suite', async () => {
    const email = 'JohnSmith@example.com'
    const password = 'test1234';


    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.automationexercise.com/login');
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    //TODO: WIP - Finish this test
    test("Sign Up Test", async ({ page }) => {
        const name = 'Jean-luc Picard';
        const email = 'picard@example.com';
        const signupLoginPage = new SignupLoginPage(page);
        await signupLoginPage.signupEmail.fill(email);
        await signupLoginPage.signupName.fill(name);
        await signupLoginPage.loginButton.click();
    });
    
    //TODO: Make more robust.
    /** 
     *  Create a new user each test suite and reuse that user for each subsequent test.
     *  Delete user after the test suite is finished. 
     */
    test("Login Test", async ({ page }) => {
        const name = 'John Smith';
        const signupLoginPage = new SignupLoginPage(page);
        await signupLoginPage.loginEmail.fill(email);
        await signupLoginPage.loginPassword.fill(password);
        await signupLoginPage.loginButton.click();
        await signupLoginPage.loggedInUserName(name).isVisible();
    });
});
