import RegistrationPage from '../pages/RegistrationPage';
import testData from '../fixtures/testData.json';

describe('User Registration Test', () => {
  it('should register a new user successfully', () => {
    const user = {
      ...testData.newUser,
      email: `hammad_${Date.now()}@yopmail.com`, // unique email per run
    };

    RegistrationPage.goToRegistration();
    RegistrationPage.enterSignupDetails(user.name, user.email);
    RegistrationPage.fillAccountDetails(user);
    RegistrationPage.fillAddressDetails(user);
    RegistrationPage.assertAccountCreated();
  });
});
