// cypress/support/pageObjects/LoginPage.js

class LoginPage {
    visit() {
        cy.visit('https://www.rocabalighting.co.uk/tissue-paper/');    }
  
    fillEmail(value) {
      const field = cy.get('input[name="email"]');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get('input[name="password"]');
      field.clear();
      field.type(value);
      return this;
    }
  
    Login() {
      const button = cy.get('.css-1gww7uu > .chakra-button');
      button.click();
    }
    clickSvgElement() {
        cy.get('path[d="M16.23 8.24c0 2.33-1.89 4.22-4.22 4.22s-4.23-1.89-4.23-4.22 1.9-4.23 4.23-4.23 4.22 1.9 4.22 4.23z"]').click();
      }
    
      ClickonLogin() {
        const button = cy.get('button[title="Login"]');
        button.click();


      }

      verifyErrorMessage() {
        cy.get('p.chakra-text.css-t1sub6').should('contain', 'Incorrect email, please try again.');
      }
  }

  
  
  export default LoginPage;
  