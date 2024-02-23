import { expect, test } from '@playwright/test';

test.describe('Test Suite', async () => {
    const email = 'JohnSmith@example.com'
    const password = 'test1234';

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.automationexercise.com/login');
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
    test("Login Test", async ({ page }) => {
        await page.locator("[data-qa='login-password']").fill(password);
        await page.locator("[data-qa='login-email']").fill(email);
        await page.locator("[data-qa='login-button']").click();
        await page.locator('li').filter({ hasText: 'Logged in as John Smith' }).isVisible();
    });
});
