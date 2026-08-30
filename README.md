# Template Next.js

## Table of Contents

- [Template Next.js](#template-nextjs)
  - [Table of Contents](#table-of-contents)
  - [ENV](#env)
  - [About this Template](#about-this-template)
    - [Tech Stack \& Libraries](#tech-stack--libraries)
      - [Core \& Framework](#core--framework)
      - [State Management \& Data Fetching](#state-management--data-fetching)
      - [UI, Styling \& Design System](#ui-styling--design-system)
      - [Validation \& Schema Safety](#validation--schema-safety)
    - [Architecture \& Key Design Decisions](#architecture--key-design-decisions)
    - [CI/CD \& Automation](#cicd--automation)
      - [Workflows](#workflows)
        - [1. Playwright E2E Tests (`.github/workflows/playwright.yml`)](#1-playwright-e2e-tests-githubworkflowsplaywrightyml)
        - [2. Automated Release (`.github/workflows/release.yml`)](#2-automated-release-githubworkflowsreleaseyml)
      - [Dependency Management (Dependabot)](#dependency-management-dependabot)
    - [Detailed Guides \& Scripts](#detailed-guides--scripts)
  - [Directory Structure](#directory-structure)
  - [License](#license)

## ENV

**IMPORTANT:** At least one `.env` file must be created at the repository root—named `.env.development`—with the following variables. The `.gitignore` file already ignores all `.env*` by default.

```.env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_ENV=development
```

## About this Template

### Tech Stack & Libraries

This template is built using Yarn v4 (Berry) as the package manager and leverages a modern, production-ready stack designed for performance, type safety, and scalability.

#### Core & Framework

- Next.js 16 (App Router): Core React framework utilizing Server Components and optimized routing.

- React 19 + React Compiler: Latest React features paired with babel-plugin-react-compiler for automatic memoization and optimal re-render performance.

- TypeScript: Full type safety across the entire codebase.

#### State Management & Data Fetching

- TanStack Query v5: Asynchronous state management, server-state caching, and optimistic UI updates (includes DevTools for debugging).

- Axios: Pre-configured HTTP client (`src/shared/lib/axios.ts`) for centralized API handling and interceptors.

#### UI, Styling & Design System

- Tailwind CSS v4 + PostCSS: High-performance utility-first styling.

- Shadcn UI & `@base-ui/react`: Headless, accessible UI primitives for reusable design components.

- Class Variance Authority (CVA) & `tailwind-merge`: Declarative, conflict-free component variant styling.

- `next-themes`: Dark/light mode theme management.

- `lucide-react`: Clean, consistent icon set.

#### Validation & Schema Safety

- Zod: Runtime environment variable validation (`src/shared/schemas/env.schema.ts`) ensuring type safety at boot time.

---

### Architecture & Key Design Decisions

1. Feature-Driven Architecture (`src/`)

    Instead of grouping files strictly by technical role, the codebase uses a hybrid Feature-Driven approach:

    - `src/app/`: Handles Next.js routing and top-level page layouts exclusively.

    - `src/features/`: Contains domain-specific business logic, components, and hooks isolated per feature module.

    - `src/shared/`: Houses global, reusable assets, generic UI components (`button.tsx`, `Header.tsx`, `Footer.tsx`), providers, API clients, and schemas.

    Why? This prevents monolithic component folders and keeps domain logic decoupled from Next.js route handlers as the application grows.

2. Strict Commit & Code Quality Workflow

    To maintain clean Git history and high code standards across team members, the repository enforces strict pre-commit checks:

    - Husky + `lint-staged`: Automatically formats (Prettier) and lints (ESLint) staged files prior to committing.

    - Commitizen + Commitlint: Ensures all commits follow the Conventional Commits standard (cz interactive CLI). Can be used running `yarn commit` instead of `git commit -m ""`.

3. End-to-End Testing & Mocking

    - Playwright: Configured for cross-browser E2E testing (`tests/e2e/`), supporting UI execution mode and HTML report generation.

4. AI-Agent Friendly (DX)

    Includes `AGENTS.md` and `CLAUDE.md` context files to streamline collaboration when using AI assistants (Claude, Cursor, Copilot) for code generation and consistency.

---

### CI/CD & Automation

This project includes pre-configured GitHub Actions workflows and Dependabot rules to automate testing, releases, and dependency management.

#### Workflows

##### 1. Playwright E2E Tests (`.github/workflows/playwright.yml`)

- **Triggers:** Pushes and Pull Requests targeting the `main` branch.

- **Functionality:**

  - Sets up Node.js LTS and Yarn via Corepack.

  - Installs headless browsers along with system dependencies.

  - Executes Playwright E2E tests.

  - Uploads test reports as GitHub artifacts (`playwright-report/`) retained for 30 days (uploaded even if tests fail or are cancelled).

##### 2. Automated Release (`.github/workflows/release.yml`)

- **Triggers:** Tag pushes matching the `v*` pattern (e.g., `v1.0.0`).

- **Functionality:**

  - Runs `.github/workflows/playwright.yml`.

  - Runs full linting (`yarn ci:check`).

  - Extracts the version tag and automatically creates a official GitHub Release with auto-generated release notes.

#### Dependency Management (Dependabot)

The repository uses `.github/dependabot.yml` for automated maintenance:

- **npm Ecosystem:** Scans weekly for outdated or vulnerable packages, capped at a maximum of 5 concurrent Pull Requests with `dependencies` and `security` labels.

- **GitHub Actions:** Scans monthly to keep workflow actions up to date.

---

### Detailed Guides & Scripts

For detailed explanations on running scripts (`yarn format`, `yarn test:e2e`, `yarn commit`, etc.), build settings, and workflow setups, please refer to the dedicated documentation in the docs/ directory.

## Directory Structure

```text
.
├── .github
│   ├── FUNDING.yml
│   ├── dependabot.yml
│   └── workflows
│       ├── playwright.yml
│       └── release.yml
├── docs
│   ├── GIT_VERSION.md
│   ├── SETUP.md
│   └── TESTING.md
├── public
│   └── assets
│       ├── fonts
│       │   └── .gitkeep
│       ├── icons
│       │   └── .gitkeep
│       └── images
│           └── .gitkeep
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── features
│   │   └── .gitkeep
│   └── shared
│       ├── components
│       │   ├── Footer
│       │   │   └── Footer.tsx
│       │   ├── Header
│       │   │   └── Header.tsx
│       │   ├── Providers
│       │   │   └── Providers.tsx
│       │   └── ui
│       │       └── button.tsx
│       ├── interfaces
│       │   └── props.interface.ts
│       ├── lib
│       │   ├── apiEndpoints.ts
│       │   ├── axios.ts
│       │   ├── env.ts
│       │   ├── queryClient.ts
│       │   ├── routes.ts
│       │   └── tailwind.ts
│       └── schemas
│           └── env.schema.ts
├── tests
│   ├── e2e
│   │   └── home
│   │       └── home.spec.ts
│   └── mocks
│       └── .gitkeep
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .yarnrc.yml
├── AGENTS.md
├── CLAUDE.md
├── LICENSE
├── README.md
├── commitlint.config.ts
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── playwright.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── tsconfig.tsbuildinfo
└── yarn.lock

25 directories, 48 files
```

## License

This project is licensed under the [MIT License](LICENSE).
