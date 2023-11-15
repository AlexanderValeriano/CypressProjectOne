/// <reference types="cypress"/>

it("Google Search", () => {
  cy.visit("https://www.google.com");

  cy.get("#APjFqb123", { timeout: 5000 }).type("Automation Step By Step");

  cy.contains("Recherche Google").click();
  cy.wait(2000);
  //   cy.contains("videos").click();
});
