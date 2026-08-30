# Setup & Environment Guide

## Table of Contents

- [Setup \& Environment Guide](#setup--environment-guide)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Running the Application](#running-the-application)
    - [Development Mode](#development-mode)
    - [Production Build](#production-build)
    - [Production Mode](#production-mode)
  - [Code Quality \& Diagnostics](#code-quality--diagnostics)
    - [Run CI Quality Checks](#run-ci-quality-checks)
    - [Format Code](#format-code)
    - [Lint Code](#lint-code)
    - [Type Checking](#type-checking)
  - [Notes](#notes)

---

## Prerequisites

> **IMPORTANT:** A `.env.development` file must exist in the project root to run the application in development mode; otherwise, execution will fail.

---

## Running the Application

### Development Mode

```bash
yarn start:dev
```

Starts the Next.js application in development mode with hot-reloading and developer tools.

---

### Production Build

```bash
yarn build
```

Compiles and optimizes the application for production usage.

---

### Production Mode

```bash
yarn start
```

Starts the production server. Requires running `yarn build` beforehand.

## Code Quality & Diagnostics

### Run CI Quality Checks

```bash
yarn ci:check
```

Runs both ESLint and TypeScript type checking (`yarn lint && yarn typecheck`).

---

### Format Code

```bash
yarn format
```

Formats source files in `src/` and `test/` using Prettier.

---

### Lint Code

```bash
yarn lint:fix
```

Lints the codebase and automatically fixes auto-fixable ESLint issues.

---

### Type Checking

```bash
yarn typecheck
```

Runs the TypeScript compiler (`tsc --noEmit`) to perform type validation without emitting output files.

## Notes

- Environment variables in development mode are loaded directly from `.env.development`.
