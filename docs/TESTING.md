# Testing

> **IMPORTANT:** Files with integration tests must be under the `test/integration` folder and be named `*.integration.spec.ts` for them to be effectively executed.

## Table of Contents

- [Testing](#testing)
  - [Table of Contents](#table-of-contents)
  - [End-to-End (E2E) Testing](#end-to-end-e2e-testing)
    - [Run Tests](#run-tests)
    - [Interactive UI Mode](#interactive-ui-mode)
    - [View Test Report](#view-test-report)

## End-to-End (E2E) Testing

### Run Tests

```bash
yarn test:e2e
```

Runs all Playwright E2E tests in headless mode.

---

### Interactive UI Mode

```bash
yarn test:e2e:ui
```

Opens Playwright UI mode to inspect, debug, and run tests interactively.

---

### View Test Report

```bash
yarn test:e2e:report
```

Opens the HTML test report in your browser to inspect previous test runs and traces.
