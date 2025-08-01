// cypress/pages/RegistrationPage.js
import BasePage from './BasePage';
import routes from '../fixtures/routes.json'
import testData from '../fixtures/testData.json'


class RegistrationPage extends BasePage {
  constructor(){
    super()
    this.getInputNameField = () => cy.get('input[data-qa="signup-name"]')
    this.getInputEmailField = () => cy.get('input[data-qa="signup-email"]')
    this.getInputSignupBtn = () => cy.get('button[data-qa="signup-button"]')
    this.getGenderRadioBtn = () => cy.get('input[id="id_gender1"]')
    this.getPasswordField = () => cy.get('input[data-qa="password"]')
    this.getDayField = () => cy.get('select[data-qa="days"]')
    this.getMonthField = () => cy.get('select[data-qa="months"]')
    this.getYearField = () => cy.get('select[data-qa="years"]')
    this.getInputFirstNameField = () => cy.get('input[data-qa="first_name"]')
    this.getInputLastNameField = () => cy.get('input[data-qa="last_name"]')
    this.getInputAddressField = () => cy.get('input[data-qa="address"]')
    this.getInputStateField = () => cy.get('input[data-qa="state"]')
    this.getInputCityField = () => cy.get('input[data-qa="city"]')
    this.getInputZipField = () => cy.get('input[data-qa="zipcode"]')
    this.getInputMobileField = () => cy.get('input[data-qa="mobile_number"]')
    this.getCreateAccountBtn = () => cy.get('button[data-qa="create-account"]')
    this.getAccountCreatedHeading = () => cy.get('h2[data-qa="account-created"]')

  }
  goToRegistration() {
    this.visit(routes.login);
  }

  enterSignupDetails(name, email) {
    this.getInputNameField().type(name);
    this.getInputEmailField().type(email);
    this.getInputSignupBtn().click();
  }

  fillAccountDetails({ password, day, month, year }) {
    this.getGenderRadioBtn().check();
    this.getPasswordField().type(password)
    this.getDayField().select(day);
    this.getMonthField().select(month);
    this.getYearField().select(year);
  }

  fillAddressDetails({ firstName, lastName, address, state, city, zipcode, mobile }) {
    this.getInputFirstNameField().type(firstName);
    this.getInputLastNameField().type(lastName);
    this.getInputAddressField().type(address);
    this.getInputStateField().type(state);
    this.getInputCityField().type(city);
    this.getInputZipField().type(zipcode);
    this.getInputMobileField().type(mobile);
    this.getCreateAccountBtn().click();
  }

  assertAccountCreated() {
    this.getAccountCreatedHeading().contains(testData.newUser.successMsg).should('be.visible');
  }
}

export default new RegistrationPage();