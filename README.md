# Playwright E-Commerce Automation Framework

A portfolio-grade end-to-end test automation framework built with **Playwright + TypeScript**. It demonstrates UI automation, REST API testing, Page Object Model, external test data, failure diagnostics, HTML reporting, cross-browser execution, and GitHub Actions CI.

## Highlights

- UI automation for login, cart, and checkout workflows
- REST API automation using Playwright `APIRequestContext`
- Page Object Model for maintainable UI tests
- JSON-based reusable test data
- Chromium and Firefox projects
- HTML reports, screenshots, videos, and traces on failures
- GitHub Actions CI pipeline
- Environment-variable based UI/API base URLs
- TypeScript strict mode

## Tech Stack

| Area | Technology |
|---|---|
| Language | TypeScript |
| UI Automation | Playwright |
| API Automation | Playwright APIRequestContext |
| Design Pattern | Page Object Model |
| Test Runner | Playwright Test |
| Reporting | Playwright HTML Report |
| CI/CD | GitHub Actions |
| Version Control | Git / GitHub |

## Project Structure

```text
playwright-ecommerce-automation/
├── .github/workflows/playwright.yml
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── test-data/
│   └── users.json
├── tests/
│   ├── api/products.spec.ts
│   └── ui/
│       ├── login.spec.ts
│       ├── cart.spec.ts
│       └── checkout.spec.ts
├── utils/test-data.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

## Applications Used

- UI tests: Sauce Demo (`https://www.saucedemo.com`)
- API tests: DummyJSON (`https://dummyjson.com`)

The API tests intentionally validate both positive and negative cases. The POST endpoint is a mock/demo endpoint and does not persist data as a production database would.

## Setup

Requirements:

- Node.js 20+
- npm 10+

Install dependencies:

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npm test
```

Run only UI tests:

```bash
npm run test:ui
```

Run only API tests:

```bash
npm run test:api
```

Run headed:

```bash
npm run test:headed
```

Type-check:

```bash
npm run lint
```

View report:

```bash
npm run report
```

## Environment Configuration

The framework provides sensible demo defaults. They can be overridden without changing source code:

```powershell
$env:UI_BASE_URL="https://www.saucedemo.com"
$env:API_BASE_URL="https://dummyjson.com"
npm test
```

## Test Coverage

### UI

- Valid login
- Locked-user authentication validation
- Add product to cart
- Add multiple products
- Cart count validation
- Cart contents validation
- Checkout completion

### API

- GET product collection
- GET product by ID
- POST product payload validation
- Negative validation for invalid product ID

## CI/CD

Every push and pull request runs the GitHub Actions workflow. The pipeline installs Node.js dependencies and Playwright browsers, executes the complete suite, and uploads the HTML report as an artifact even when tests fail.

## Resume Description

**Playwright E-Commerce Automation Framework | TypeScript, Playwright, API Testing, GitHub Actions**

- Developed a UI and API automation framework using Playwright and TypeScript following Page Object Model principles.
- Automated authentication, product, cart, and checkout workflows with reusable page objects and test data.
- Implemented REST API validation for positive and negative scenarios using Playwright APIRequestContext.
- Configured cross-browser execution, HTML reporting, screenshots, traces, and video capture for failure analysis.
- Integrated the framework with GitHub Actions for automated CI test execution.
