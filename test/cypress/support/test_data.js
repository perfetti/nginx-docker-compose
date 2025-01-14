// Helper commands for managing test data through the Rails API

Cypress.Commands.add("resetTestData", () => {
  cy.request({
    method: "POST",
    url: `${Cypress.config().baseUrl}/api/test_data/reset`,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("createTestData", (data) => {
  cy.request({
    method: "POST",
    url: `${Cypress.config().baseUrl}/api/test_data/setup`,
    body: { data },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add("getFactories", () => {
  cy.request({
    method: "GET",
    url: `${Cypress.config().baseUrl}/api/test_data/factories`,
    failOnStatusCode: false,
  });
});

// Common test data setups
Cypress.Commands.add("setupProvisionalBook", (title = "Test Book") => {
  cy.createTestData([
    {
      factory: "book",
      attributes: {
        title,
        status: "provisional",
      },
    },
  ]);
});

Cypress.Commands.add("setupApprovedBook", (title = "Approved Book") => {
  cy.createTestData([
    {
      factory: "book",
      attributes: {
        title,
        status: "approved",
      },
    },
  ]);
});

Cypress.Commands.add(
  "setupBookWithAuthorAndPublisher",
  ({
    bookTitle = "Test Book",
    authorName = "Test Author",
    publisherName = "Test Publisher",
    status = "approved",
  }) => {
    cy.createTestData([
      {
        factory: "book",
        attributes: {
          title: bookTitle,
          status,
          author_attributes: {
            name: authorName,
          },
          publisher_attributes: {
            name: publisherName,
          },
        },
      },
    ]);
  }
);
