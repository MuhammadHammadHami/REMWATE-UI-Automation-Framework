class BasePage {
  visit(path = '/') {
    cy.visit(path);
  }

  get(selector) {
    return cy.get(selector);
  }

  click(selector) {
    cy.get(selector).click();
  }

  type(selector, text) {
    cy.get(selector).clear().type(text);
  }
}

export default BasePage;
