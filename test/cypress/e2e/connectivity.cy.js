describe("Service Connectivity", () => {
  it("can access frontend", () => {
    cy.visit("/");
    cy.contains("Book List").should("exist");
  });

  it("can access backend", () => {
    cy.visit("/backend/");
    cy.contains("Provisional Books").should("exist");
  });

  it("can access API", () => {
    // Add retry logic for API readiness
    cy.request({
      url: "/api/test_data/factories",
      retryOnStatusCodeFailure: true,
      timeout: 30000,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("factories");
    });
  });

  it("can use test data helpers", () => {
    // Wait for API to be ready before using test data helpers
    cy.request({
      url: "/api/test_data/factories",
      retryOnStatusCodeFailure: true,
      timeout: 30000,
    }).then(() => {
      // Reset test data
      cy.resetTestData();

      // Create a test book
      cy.setupApprovedBook("Connectivity Test Book");

      // Verify the book appears
      cy.visit("/");
      cy.contains("Connectivity Test Book", { timeout: 10000 }).should("exist");
    });
  });
});
