// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';
// cypress/support/commands.js
// cypress/support/commands.js
// cypress/support/commands.js

Cypress.Commands.add('getSession', () => {
    cy.request('GET', 'https://www.rocabalighting.co.uk/api/auth/session')
      .then((response) => {
        // Assuming the response contains a csrfToken and sessionToken
        const csrfToken = String(response.body.csrfToken);
        const sessionToken = String(response.body.sessionToken);
  
        // Set secure cookies
        cy.setCookie('__Host-next-auth.csrf-token', csrfToken, { secure: true, path: '/' });
        cy.setCookie('your-session-cookie', sessionToken, { secure: true, path: '/' });
      });
  });
    