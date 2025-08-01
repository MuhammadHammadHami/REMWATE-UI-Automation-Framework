export function assertText(selector, expectedText) {
  cy.get(selector).should('contain.text', expectedText);
}
