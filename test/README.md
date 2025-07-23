# Cypress Tests

This directory contains end-to-end tests using Cypress for the Books application.

## Setup

The tests can be run either locally or through Docker, depending on your preference during development.

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Make sure the application is running (docker compose up):

   - Frontend at http://localhost:8089
   - Backend at http://localhost:8089/backend
   - API at http://localhost:8089/api

3. Run tests:

```bash
# Open Cypress GUI for development
npm run test:gui

# Run tests headlessly
npm test
```

### Docker Environment

The tests can also be run through Docker, which is how they'll run in CI/CD:

```bash
# Run tests headlessly in Docker
npm run test:docker

# Open Cypress GUI in Docker
npm run test:docker:open
```

## Test Data Helpers

The `cypress/support/test_data.js` file provides helper commands for managing test data:

- `cy.resetTestData()` - Clears all test data
- `cy.createTestData(data)` - Creates test data using factory_bot factories
- `cy.setupProvisionalBook(title)` - Creates a book with provisional status
- `cy.setupApprovedBook(title)` - Creates a book with approved status
- `cy.setupBookWithAuthorAndPublisher(options)` - Creates a book with associated author and publisher

Example usage:

```javascript
beforeEach(() => {
  cy.resetTestData();
});

it("displays approved books", () => {
  cy.setupApprovedBook("Test Book");
  cy.visit("/");
  cy.contains("Test Book");
});
```

## Configuration

The tests are configured to work in both local and Docker environments:

- Local development uses http://localhost:8089
- Docker environment uses http://nginx:80
- The base URL can be overridden with the CYPRESS_BASE_URL environment variable

See `cypress.config.js` for more configuration options.
