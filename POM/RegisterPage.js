// cypress/support/pageObjects/RegisterPage.js

class RegisterPage {
    visit() {
      cy.visit('https://www.rocabalighting.co.uk/');
    }
  
    clickSvgElement() {
      cy.get('#popover-trigger-\\:r1\\: > .chakra-icon').click();
    }
  
    clickRegisterNow() {
      cy.get('.cOayTp').click();
    }
  
    selectUserType() {
      cy.get(':nth-child(2) > .chakra-radio > .chakra-radio__control').click();
      cy.get('#radio-\\:ru\\:').check();
    }
  
    fillFirstName(value) {
      const field = cy.get(':nth-child(1) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillLastName(value) {
      const field = cy.get(':nth-child(2) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillEmail(value) {
      const field = cy.get(':nth-child(3) > .css-t5rqjb > .sc-a1e2bb0b-17');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get(':nth-child(4) > .css-t5rqjb > .sc-a1e2bb0b-17');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillConfirmPassword(value) {
      const field = cy.get(':nth-child(5) > .css-t5rqjb > .sc-a1e2bb0b-17');
      field.clear();
      field.type(value);
      return this;
    }
  
    submit() {
      const button = cy.get('.css-19ronn4 > form > .chakra-button');
      button.click();
    }
  
    clickContinue() {
      const button = cy.get('.css-18gucyk > .chakra-button');
      button.click();
    }
  }
  
  export default RegisterPage;
  