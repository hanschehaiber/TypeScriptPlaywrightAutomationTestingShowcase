import { CheckoutCompletePage } from "./pages/checkout.complete.page";
import { CheckoutOverviewPage } from "./pages/checkout.overview.page";
import { CheckoutInfoPage } from "./pages/checkout.info.page";
import { ShoppingCart } from "./pages/shopping.cart.page";
import { expect, test } from "@playwright/test";
import { LoginPage } from "./pages/login.page";
import { ProductsPage } from "./pages/products.page";

test.describe("Sauce Demo Happy Path Test Suite", async () => {
  let productsPage: ProductsPage;
  let loginPage: LoginPage;
  let shoppingCart: ShoppingCart;
  let checkoutInfoPage: CheckoutInfoPage;
  let checkoutOverviewPage: CheckoutOverviewPage;
  let checkoutCompletePage: CheckoutCompletePage;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    checkoutInfoPage = new CheckoutInfoPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
    checkoutCompletePage = new CheckoutCompletePage(page);
    shoppingCart = new ShoppingCart(page);
  });

  test("Add a single item to cart and checkout", async () => {
    const username = "standard_user";
    const password = "secret_sauce";
    const firstName = "John";
    const lastName = "Smith";
    const postalCode = "12345";

    await loginPage.login(username, password);
    const priceOnProductsPage = await productsPage.getFirstProductPrice();
    await productsPage.addFirstProductToCart();
    await productsPage.shoppingCart.click();
    const numberOfItemsInCart = await shoppingCart.getNumberOfItemsInCart();
    expect(numberOfItemsInCart).toBe(1);

    await shoppingCart.checkout.click();

    await checkoutInfoPage.fillOutAndSubmitCheckoutInfo(
      firstName,
      lastName,
      postalCode
    );

    expect(await checkoutOverviewPage.getSubtotal()).toContain(
      priceOnProductsPage
    );
    await checkoutOverviewPage.finish.click();
    const expectedMessage =
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    expect(await checkoutCompletePage.getCompleteText()).toEqual(
      expectedMessage
    );
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });
});
