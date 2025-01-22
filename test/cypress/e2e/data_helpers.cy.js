// This test suite is designed to verify the functionality of Cypress data helpers.
// It should be run before other test suites to ensure data helpers are working correctly.

describe("Cypress Data Helpers", async () => {
  beforeEach(() => {
    cy.resetTestData();
  });

  it("should verify the data helper for creating test data", async () => {
    cy.setupApprovedBook("Book1", "Author1", "Publisher1");
    cy.setupApprovedBook("Book2", "Author2", "Publisher2");
    cy.setupApprovedBook("Book3", "Author3", "Publisher3");

    // Perform a GET request to verify data creation
    cy.request("GET", "/api/books").then((getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body).to.have.lengthOf(3);
    });
  });

  it("should verify the data helper for resetting test data", async () => {
    // Create books first
    cy.setupApprovedBook("Book1", "Author1", "Publisher1");
    cy.setupApprovedBook("Book2", "Author2", "Publisher2");
    cy.setupApprovedBook("Book3", "Author3", "Publisher3");

    // Verify books are created
    cy.request("GET", "/api/books").then(async (getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body).to.have.lengthOf(3);

      // Reset the database
      cy.request("POST", "/api/test_data/reset").then((resetResponse) => {
        expect(resetResponse.status).to.eq(200);

        // Verify books are removed
        cy.request("GET", "/api/books").then((finalGetResponse) => {
          expect(finalGetResponse.status).to.eq(200);
          expect(finalGetResponse.body).to.have.lengthOf(0);
        });
      });
    });
  });
});
