// cypress/integration/register.spec.js

import RegisterPage from '../../POM/RegisterPage';



const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Emma'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia'];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomEmail() {
  const domains = ['example.com', 'test.com', 'mail.com'];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${getRandomElement(firstNames).toLowerCase()}.${getRandomElement(lastNames).toLowerCase()}@${domain}`;
}

describe('Register Test', () => {
  const registerPage = new RegisterPage();

  it('should register successfully', () => {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const email = getRandomEmail();
    const password = 'test1234';

    registerPage.visit();
    registerPage.clickSvgElement();
    registerPage.clickRegisterNow();
    registerPage.selectUserType();
    registerPage.fillFirstName(firstName);
    registerPage.fillLastName(lastName);
    registerPage.fillEmail(email);
    registerPage.fillPassword(password);
    registerPage.fillConfirmPassword(password);
    registerPage.submit();

    // Add assertions to verify registration was successful
    cy.get('.css-18gucyk > .chakra-button').should('have.text', 'Continue');
    registerPage.clickContinue();
  });
});

