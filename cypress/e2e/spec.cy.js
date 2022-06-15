/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  });

  it("creates a screenshot", () => {
    // Screenshot is stored in different locations,
    // depending on whether `cypress:open` or `cypress:run`
    // is executed.
    // Expected: `~/cypress/screenshots/spec.cy.js/myScreenshot.png`
    // Found (with `cypress:open`): `~/cypress/screenshots/myScreenshot.png` 
    cy.screenshot("myScreenshot")
  });
})
