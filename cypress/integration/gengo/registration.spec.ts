// from your cypress/integration/spec.ts
/// <reference path="../../support/index.d.ts" />

describe("Registration", () => {
  it("Registers a user", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=nav-registration]").click();
    cy.url().should("include", "/registration");

    cy.get("[data-cy=registration-firstname]").type("xavier");
    cy.get("[data-cy=registration-lastname]").type("ramirez");
    cy.get("[data-cy=registration-email]").type(
      "xaviermicahramirez@utexas.edu"
    );
    cy.get("[data-cy=registration-password]").type("12345678");
    cy.get("[data-cy=registration-confirmpassword]").type("12345678");
    cy.get("[data-cy=registration-create]").click();

    cy.get(".MuiAlert-message").should(
      "have.text",
      "This account already exists."
    );
  });
});
