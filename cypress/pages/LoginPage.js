import routes from '../fixtures/routes.json'
import testData from '../fixtures/testData.json'

class LoginPage {
  constructor(){
    this.getEmailInputField = () => cy.get('input[data-qa="login-email"]')
    this.getpPasswordInputField = () => cy.get('input[data-qa="login-password"]')
    this.getLoginBtn = () => cy.get('button[data-qa="login-button"]')
    this.errorMessage = () => cy.get('p[style="color: red;"]')
    this.getSuccessMessage = () => cy.get('i[class="fa fa-user"]')
  }

  visit() {
    cy.visit(routes.login);
  }
  enterEmail(email) {
    this.getEmailInputField().clear().type(email);
  }
  enterPassword(password) {
    this.getpPasswordInputField().clear().type(password);
  }
  submit() {
    this.getLoginBtn().click();
  }
  getErrorMessage(errorMessage) {
    return this.errorMessage().should('contains.text',errorMessage)
  }
  getSuccessMessage(succesMessage) {
    return this.getSuccessMessage().should('contains.text', succesMessage);
  }
}

export default new LoginPage();
