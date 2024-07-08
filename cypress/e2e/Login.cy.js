// cypress/integration/login.spec.js

import LoginPage from '../../POM/LoginPage'

describe('Login Test', () => {


  const loginPage = new LoginPage();

  it('should login successfully', () => {
    loginPage.visit();
    loginPage.clickSvgElement();
    loginPage.ClickonLogin();
    cy.url().should('include', '/mypage');
    loginPage.fillEmail('emma.jones@mail.com');
    loginPage.fillPassword('test1234');
    loginPage.Login();
   
   
  });

  it('should show error message on incorrect login', () => {
    loginPage.visit();
    loginPage.clickSvgElement();
    loginPage.ClickonLogin();
    loginPage.fillEmail('wronguser@example.com');
    loginPage.fillPassword('wrongpassword');
    loginPage.Login();

    // Verify the error message
    loginPage.verifyErrorMessage();
  });
});
