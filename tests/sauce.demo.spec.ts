import { test } from "@playwright/test";
import { LoginPage } from "./pages/login.page";

test.describe("Test Suite", async () => {
  test.beforeAll(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
  });

  test("Go to Website", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.submitLogin();
    //Add the first item in the products list to the cart
    //Click on the shopping cart
    //verify the cart has that item
    //click checkout
    //enter shipping info on checkout page
    //click continue to go to the summary page
    //verify the price
    //click finish to goto finish page
    //Verify the success message displays
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });
});
