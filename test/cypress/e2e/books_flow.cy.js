describe("Books Flow", () => {
  beforeEach(() => {
    // Reset database before each test
    cy.request("POST", "/api/test_data/reset");
  });

  it("allows proposing and approving books", () => {
    // Visit React1 app (root path)
    cy.visit("/");
    cy.contains("Book List");

    // Propose a new book
    cy.contains("button", "Propose New Book").click();
    cy.get('input[placeholder="Enter book title"]').type("Test Book Title");
    cy.contains("button", "Submit").click();

    // Visit React2 app (/backend path)
    cy.visit("/backend");
    cy.contains("Provisional Books");
    cy.contains("Test Book Title");

    // Approve the book
    cy.contains(".book-item", "Test Book Title")
      .contains("button", "Approve")
      .click();

    // Verify book appears in approved list
    cy.contains(".books-section", "Approved Books")
      .should("exist")
      .within(() => {
        cy.contains("Test Book Title");
      });

    // Go back to React1 and verify book appears there
    cy.visit("/");
    cy.contains("Test Book Title");
  });

  it("allows denying provisional books", () => {
    // Visit React1 app
    cy.visit("/");

    // Propose a new book
    cy.contains("button", "Propose New Book").click();
    cy.get('input[placeholder="Enter book title"]').type("Book To Deny");
    cy.contains("button", "Submit").click();

    // Visit React2 app and deny the book
    cy.visit("/backend");
    cy.contains(".book-item", "Book To Deny")
      .contains("button", "Deny")
      .click();

    // Verify book is removed from provisional list
    cy.contains("Book To Deny").should("not.exist");
  });

  it("displays test data books", () => {
    // Load test data
    cy.request("POST", "/api/test_data/load");

    // Visit React1 app
    cy.visit("/");

    // Verify test data books are present
    cy.contains("Test Book 1");
    cy.contains("Test Book 2");
    cy.contains("Test Book 3");
  });
});
