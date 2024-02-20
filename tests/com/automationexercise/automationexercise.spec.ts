import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.automationexercise.com/login');
})



test("Login Test", async ({ page }) => {
    await page.waitForTimeout(5000);

})