import { test, expect } from '@playwright/test';

test('test refined', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/login');
  //Navigate to Login Page
  await page.getByRole('heading', { name: 'New User Signup!' }).isVisible();
  await page.getByPlaceholder('Name').fill('Jean-luc Picard');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('picard@example.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  //Navigate to Sign Up Form
  await page.getByText('Mr.').click();
  await page.getByLabel('Password *').fill('test1234');
  await page.locator('#days').selectOption('1');
  await page.locator('#months').selectOption('1');
  await page.locator('#years').selectOption('2000');
  await page.getByLabel('First name *').fill('Jean-luc');
  await page.getByLabel('Last name *').fill('Picard');
  await page.getByLabel('Address * (Street address, P.').fill('123 Success Street');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByLabel('State *').fill('Florida');
  await page.getByLabel('City *').fill('Miami');
  await page.locator('#zipcode').fill('12345');
  await page.getByLabel('Mobile Number *').fill('1234567890');
  await page.getByRole('button', { name: 'Create Account' }).click();
  //** Navigated back to homepage */
  await page.getByText('Account Created!').isVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByText('Logged in as Jean-luc Picard').isVisible();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByText('Account Deleted!').isVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  //Back to Home
});




test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/login');
  await page.getByRole('heading', { name: 'New User Signup!' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Jean-luc Picard');
  await page.getByPlaceholder('Name').press('Tab');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('picard@example.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByText('Mr.').click();
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('test1234');
  await page.locator('#days').selectOption('1');
  await page.locator('#months').selectOption('1');
  await page.locator('#years').selectOption('2000');
  await page.getByLabel('First name *').click();
  await page.getByLabel('First name *').fill('Jean-luc');
  await page.getByLabel('First name *').press('Tab');
  await page.getByLabel('Last name *').fill('Picard');
  await page.getByLabel('Address * (Street address, P.').click();
  await page.getByLabel('Address * (Street address, P.').fill('123 Success Street');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').fill('Florida');
  await page.getByLabel('State *').press('Tab');
  await page.getByLabel('City *').fill('Miami');
  await page.getByLabel('City *').press('Tab');
  await page.locator('#zipcode').fill('12345');
  await page.getByLabel('Mobile Number *').click();
  await page.getByLabel('Mobile Number *').fill('1234567890');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Account Created!').click();
  await page.getByText('Account Created! Congratulations! Your new account has been successfully').click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.frameLocator('iframe[name="aswift_4"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad').click();
  await page.getByText('Logged in as Jean-luc Picard').click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByText('Account Deleted!').click();
  await page.getByText('Account Deleted! Your account').click();
  await page.getByText('Account Deleted! Your account').click();
  await page.getByRole('link', { name: 'Continue' }).click();
});

