# REMWATE UI Automation Framework

This repository contains an automated UI testing framework for the REMWATE web application. The framework is designed using modern tools and best practices to ensure scalable, maintainable, and reliable end-to-end testing.

---

##  Features

-  UI Automation using **Cypress**
-  Written in **JavaScript**
-  Integrated with **CI/CD pipelines** (e.g., GitHub Actions, Jenkins)
-  Custom test reporting (HTML or Allure support)
-  Modular and scalable folder structure
-  Page Object Model (POM) implemented

---

##  Tech Stack

- [Cypress]
- JavaScript
- Node.js
- Allure Reporter (optional)
- GitHub Actions / Jenkins (for CI)

---

## Folder Structure

```bash
REMWATE-UI-Automation-Framework/
│
├── e2e/                  # Test suites
├── fixtures/             # JSON files
├── pages/                # Page Object Models
├── support/                # Reusable utility functions
├── .github/workflows/    # CI/CD workflows
├── package.json          # Project metadata and dependencies
├── cypress.config.js     # Cypress configuration
└── README.md             # Project documentation
```

## Getting Started
1. Install dependencies
```bash
npm install
```

2. Run tests locally (headless mode)
```bash
npx cypress run
```

3. Run tests in Cypress UI
```bash
npx cypress open
```

Reports & Artifacts
Screenshots and videos are captured automatically on failure

If using Allure, generate reports like this:

```bash
# After test run
npm run allure:generate
npm run allure:open
```

Make sure Allure is set up in package.json and plugins.

CI/CD Integration
This framework can be integrated with:

GitHub Actions

Jenkins

GitLab CI

Others...

Sample GitHub Actions workflow is included in .github/workflows/.

## Contributing
Feel free to fork this repository and open pull requests. For larger changes, open an issue first to discuss what you'd like to do.

