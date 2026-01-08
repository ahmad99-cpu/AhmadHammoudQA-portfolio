# End-to-End Tests

This directory contains Playwright end-to-end tests for the portfolio website.

## Structure

```
e2e/
├── specs/           # Test specification files
│   ├── homepage.spec.js    # Homepage and navigation tests
│   ├── contact.spec.js     # Contact section tests
│   └── projects.spec.js    # Projects section tests
└── README.md        # This file
```

## Running Tests

### Install Playwright browsers (first time only)
```bash
npx playwright install
```

### Run all tests
```bash
npm run test:e2e
```

### Run tests in UI mode (interactive)
```bash
npm run test:e2e:ui
```

### Run tests in debug mode
```bash
npm run test:e2e:debug
```

### Run tests in headed mode (see browser)
```bash
npm run test:e2e:headed
```

### Run specific test file
```bash
npx playwright test e2e/specs/homepage.spec.js
```

## Test Configuration

Configuration is in `playwright.config.js` at the root of the project.

The tests automatically start the development server before running, so make sure port 3000 is available.

## Writing New Tests

1. Create a new `.spec.js` file in `e2e/specs/`
2. Follow the existing test structure
3. Use descriptive test names
4. Group related tests with `test.describe()`

Example:
```javascript
const { test, expect } = require('@playwright/test');

test.describe('My Feature', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/');
    // Your test code here
  });
});
```

