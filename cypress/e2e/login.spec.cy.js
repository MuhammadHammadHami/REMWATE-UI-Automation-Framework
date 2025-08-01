import LoginPage from '../pages/LoginPage';
import testData from '../fixtures/testData.json'
import routes from '../fixtures/routes.json'

describe('UI Login Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login with valid credentials', () => {
    LoginPage.enterEmail(testData.validUser.email);
    LoginPage.enterPassword(testData.validUser.password);
    LoginPage.submit();
    LoginPage.getSuccessMessage().should('be.visible')
    LoginPage.getSuccessMessage(testData.validUser.successMsg+testData.validUser.name)
  });

  it('Login with invalid credentials', () => {
    LoginPage.enterEmail(testData.invalidUser.email);
    LoginPage.enterPassword(testData.invalidUser.password);
    LoginPage.submit();
    LoginPage.getErrorMessage(testData.invalidUser.errorMessage);
  });
});
