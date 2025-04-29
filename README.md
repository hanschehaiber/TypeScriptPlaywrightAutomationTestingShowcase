# TypeScript Playwright Automation Testing Showcase

This project is a showcase of automation testing using [Playwright](https://playwright.dev/) with TypeScript. It includes test cases for different web applications and demonstrates best practices for structuring and organizing test code.

## Project Structure

The project is organized as follows:

```
TypeScriptPlaywrightAutomationTestingShowcase/
├── package.json
├── playwright.config.ts
├── README.md
├── tsconfig.json
├── tests/
│   ├── com/
│   │   ├── automationexercise/
│   │   │   ├── automationexercise.spec.ts
│   │   │   └── pages/
│   │   │       ├── base.page.ts
│   │   │       └── signup.login.page.ts
│   │   └── saucedemo/
│   │       ├── sauce.demo.spec.ts
│   │       └── pages/
│   │           ├── base.page.ts
│   │           ├── checkout.complete.page.ts
│   │           ├── checkout.info.page.ts
│   │           ├── checkout.overview.page.ts
│   │           ├── login.page.ts
│   │           ├── products.page.ts
│   │           └── shopping.cart.page.ts

```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

## Setup

1. Clone the repository:

   ```bash
   gh repo clone hanschehaiber/TypeScriptPlaywrightAutomationTestingShowcase
   cd TypeScriptPlaywrightAutomationTestingShowcase
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure Playwright browsers are installed:
   ```bash
   npx playwright install
   ```

## Running Tests

- To run all tests:

  ```bash
  npx playwright test
  ```

- To run a specific test file:

  ```bash
  npx playwright test tests/com/automationexercise/automationexercise.spec.ts
  ```

- To generate and view the HTML report:
  ```bash
  npx playwright show-report
  ```

## Writing Tests

- Test files are located in the `tests/` directory.
- Use the Page Object Model (POM) pattern for creating reusable and maintainable test code.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
