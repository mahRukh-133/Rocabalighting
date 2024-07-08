// cypress/integration/login_spec.js

import LoginPage from '../../POM/LoginPage';

describe('Login Test with Secure Cookies', () => {
  const loginPage = new LoginPage();

  before(() => {
    // Fetch session data and set secure cookies
    cy.getSession();
  });

  it('should login successfully and proceed through checkout', () => {
    // Visit the login page
    loginPage.visit();

    // Navigate through the login process
    loginPage.clickSvgElement();
    loginPage.ClickonLogin();

    // Assert the URL includes '/mypage' after clicking login
    cy.url().should('include', '/mypage');

    // Fill in email and password
    loginPage.fillEmail('emma.jones@mail.com');
    loginPage.fillPassword('test1234');
    loginPage.Login();

    cy.wait(5000);

    cy.get('#popover-trigger-\\:r3\\: > .chakra-link > .chakra-text').should('be.visible').click();
    cy.url().should('include', '/carrier-bags');

    // Click on View full range
    cy.get(':nth-child(1) > .chakra-link > .css-9j8rml > .css-exxvhc').click();
    // Click on quick buy
    cy.get('.css-mmmh0p > .sc-63f68c49-0 > :nth-child(1) > .chakra-button').should('be.visible').click();
    cy.get(':nth-child(1) > :nth-child(3) > .css-58uf8g > .chakra-button').should('be.visible').click();

    // Click on secure checkout
    cy.get('.css-1oz4v7j > .sc-a1e2bb0b-0').should('be.visible').click();
    cy.contains('button', 'Secure Checkout').should('be.visible').click();
    cy.get('button.chakra-button.sc-a1e2bb0b-0.sc-a1e2bb0b-4.hKqsug.njVKL.css-1ltl2rk').should('be.visible').click();

    // Verify the URL after clicking on secure checkout
    cy.get('.header_cartbox > .chakra-button').should('be.visible').click();
    cy.url().should('eq', 'https://www.rocabalighting.co.uk/basket/');

    // Click on Checkout
    cy.get('.css-1oz4v7j > .sc-a1e2bb0b-0').should('be.visible').click();
    cy.get('.css-bviamb > .chakra-heading').should('have.text', 'Secure Checkout');
    cy.get('.css-8m06pi > .sc-a1e2bb0b-0').should('be.visible').click();

    // Click on the instruction textarea
    cy.get('.instruction-textarea').should('be.visible').click();

    // Select the radio button
    cy.get(':nth-child(1) > .css-0 > .chakra-radio > .chakra-radio__label > .css-9f3sqe > .chakra-heading').should('be.visible').click();
    
    // Debug step: Log a message before clicking the "Continue" button
    cy.log('Clicking on the Continue button');

    // Intercept the API call triggered by the Continue button
    cy.intercept('GET', '/api/Checkout/GetPaymentDetails*').as('getPaymentDetails');

    // Ensure the "Continue" button is visible and clickable
    cy.get('.css-45v1j2 > .chakra-button').should('be.visible').click();

    // Wait for the API call and handle the response
    cy.wait('@getPaymentDetails').then((interception) => {
      const { request, response } = interception;
      
      // Log the request and response details
      cy.log('Request:', request);
      cy.log('Response:', response);

      // Check if the response status code is 200
      if (response.statusCode !== 200) {
        cy.log('API call failed with status code:', response.statusCode);
        throw new Error(`API call failed with status code: ${response.statusCode}`);
      }

      // Check if the response body has isSuccess set to true
      if (!response.body.isSuccess) {
        cy.log('API response isSuccess is false');
        
        // Log detailed response information for debugging
        cy.log('Response Body:', JSON.stringify(response.body, null, 2));
        
        throw new Error('API response isSuccess is false. Detailed response logged.');
      }

      // Validate the response structure
      if (!response.body.response || !Array.isArray(response.body.response) || response.body.response.length === 0) {
        cy.log('API response structure is invalid or empty');
        throw new Error('API response structure is invalid or empty');
      }

      // Additional logging for debugging
      cy.log('API response:', response.body);

      // Proceed with the test after successful API call
      cy.log('API call succeeded, proceeding with the test');
    });

    // Add an assertion to verify that the click action was successful
    cy.url().should('not.eq', 'https://www.rocabalighting.co.uk/basket/');
  });
});
