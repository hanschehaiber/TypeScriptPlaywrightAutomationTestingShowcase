import { expect, test } from "@playwright/test";

import { CheckoutCompletePage } from "./pages/checkout.complete.page";
import { CheckoutOverviewPage } from "./pages/checkout.overview.page";
import { CheckoutInfoPage } from "./pages/checkout.info.page";
import { ShoppingCartPage } from "./pages/shopping.cart.page";
import { LoginPage } from "./pages/login.page";
import { ProductsPage } from "./pages/products.page";

test.describe("Sauce Demo Happy Path Test Suite", async () => {
  const username = "standard_user";
  const password = "secret_sauce";
  const firstName = "John";
  const lastName = "Smith";
  const postalCode = "12345";

  let productsPage: ProductsPage;
  let loginPage: LoginPage;
  let shoppingCartPage: ShoppingCartPage;
  let checkoutInfoPage: CheckoutInfoPage;
  let checkoutOverviewPage: CheckoutOverviewPage;
  let checkoutCompletePage: CheckoutCompletePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    checkoutInfoPage = new CheckoutInfoPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    checkoutCompletePage = new CheckoutCompletePage(page);
    shoppingCartPage = new ShoppingCartPage(page);

    test.step("Go to Login Page and Login", async () => {
      await page.goto("https://www.saucedemo.com/");
      await loginPage.login(username, password);
    });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test("Add a single item to cart and checkout", async () => {
    const priceOnProductsPage = await productsPage.getFirstProductPrice();
    await productsPage.addFirstProductToCart();
    await productsPage.shoppingCart.click();
    await expect(shoppingCartPage.cartItems).toHaveCount(1);
    await shoppingCartPage.checkout.click();

    await checkoutInfoPage.fillOutAndSubmitCheckoutInfo(
      firstName,
      lastName,
      postalCode
    );

    await expect(checkoutOverviewPage.subtotal).toContainText(
      priceOnProductsPage
    );
    await checkoutOverviewPage.finish.click();
    const expectedMessage =
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    await expect(checkoutCompletePage.completeText).toContainText(
      expectedMessage
    );
  });


});

test.describe("Negative Test Cases", async () => {
  test("Test Locked Out User", async ({ page }) => {
    const username = 'locked_out_user';
    const password = 'secret_sauce';
    await page.goto('https://www.saucedemo.com');
    const loginPage = new LoginPage(page);
    await loginPage.username.fill(username);
    await loginPage.password.fill(password);
    await loginPage.loginButton.click();
    await expect(loginPage.lockedOutError).toBeVisible();
    await page.close();
  })
});
