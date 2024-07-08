import LoginPage from '../../POM/LoginPage';
import { TOKEN_ONE, TOKEN_TWO } from '../../token';
const cardDetails = require('../../cardDetails.json'); 
describe('Pay with Card', () => {
  const loginPage = new LoginPage();

  // Function to set the session manually using captured cookies or local storage data
  const setSessionManually = () => {
    // Set cookies manually with the secure flag
    cy.setCookie('__Secure-next-auth.session-token', 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..m_A3mQigZmTBZD5t.OtJDmplW2tDT3xug4jKstlrUKVhz596vzZ-cOxm7J_nts_VI8YvppOmUYDrnBZfhH2e0OWRLW54rT8pYRmt9ICXzLil-BIgmveGdcvqhvMIEdQqyavTdrz-gfMOfQ8yvkHTtlT9xnDYgsL6dqtXmfL5nVWQ_TTlQowIF_rCfpUBbJaG0MeecwwwRjOPly79WgmbLhLzzltUcwK7wevX1v3BsHhsn8K-qT-qQtsyzOSKZwh_XX7UPbTsaKfa8u12_KCEjAAdclutaQ-CrEgOWE1ow96yo7SEMB4beh1ltKBj630GIr2d7gkxKRSBE--9ikuaTXakxcbRqpOZ1O7k-WhB_AE3mAjj4lOWgpKGXuKZqZyfFbpwPy2225zmxajC0GdVAAZ-AdVpDpb8NrqBiomYV4S03g9dxM-JJZvuk6xv2g8UZ0_1u9XwweR0_cT1lw1CCARS2Bymyyuzx53fPbNtHEKH7Iioqv3ssAC88seNfhlbwjOsfOs4KbK-KWsDaHMj40VDC96vo_aZmXIINvV7G7rcuaFAKc2_9kKqE5UaG0zKYQmSGLT0XOKIsFqaVM3mqbUvcMwInGXpRqCmyvLt-7hbUIVEHriPsdA1sri6Yt3h8w1tBxUkv7mzdtshRAu2nejDqzws2va0V6wHiuYQSioRgVCVu16FGN67CvhLL7gF2JrBTuZq6TxFmm_28ngqbjCmE-6oLHd1eOQT2YDvmOp_cymhyPLsScB1ENGlxKAWS0Bm9ngbWwdqj2QnEQfz8NGP6gqbilm5tXchQv-iZ1ogrC4mg-Kmf9islEQMEntDsrkgUPZReAwpy2CKutiH4wCb0CJBIUVXgfA4_ZDSadAAcQPQ08iE8DAVqG0ZsU-wXQkt_9W7dkRegeBfHg_PDS4vwQEao0vGhZRtHry9F0glz75YGzqEtaZAymMGnEtNqiL1Ck6f5b8W4LU6qNPmgCvVASbW5t0Hip9ihK9GGmiL0QyAvpBOam8Kr12NnxS546rXnq9sSoI01ZxWI8gCEflIWQzRQOpW-E4w24Eb7-cgJMdOFabP6wkjQLxHct9RZSOuIKd5ZIlHDEz8eiEDo4yq13BwD-DJi7ie_orFpx1zaBmLsVb7yo3Zl5koSGQngsGXfTUlaNu-n-_uU9Gpt4IsywjIGrmGa7Q03-3fRRkO9Qjg-oG7sfpXX3URWMYj9okzc8u6JWSIWgp4cqQXWhQwXRsxfQezVeJ3CUFQflUUCK6AWwDlxWPV6Q__JXrJUpvzRA1HlFdgToukRF6_GkmFQdD2Bfcecn74IPzME-LUqZZhItLq_4z5wO9hbPAU5e91dgOSVUWFXIkmYhuI-HbSoYFvBoHw-ITlNZhIXu_r3OfQQG8QaQeECouPz0og2tuuoff95XMYSNapsN5C_adfR74a0ejV5Myhk7d0IHsVwZ3ac1updMs9gi-W4qSemIMfl6wv8PF0mxEChWe1dWtuBzMFUx-n_Z96XiqDrDtyNhSFd.iu7199kz21EcNCcu1ISLKg', { secure: true, sameSite: 'None' });
    // Set local storage data manually8KiH1-3Iq-0ZrxdBaXmqAPfrMQfHkW
    cy.window().then((win) => {
      win.localStorage.setItem('key1', 'value1');
      win.localStorage.setItem('key2', 'value2');
    });
  };

  // Use cy.session() to handle the login
  beforeEach(() => {
    cy.session('userSession', setSessionManually);
  });

  it('should login successfully and pay with card', () => {
    loginPage.visit();

    // Perform necessary actions to reach the checkout or payment page
    cy.get('#popover-trigger-\\:r5\\: > .chakra-link > .chakra-text').click({ retryOnStale: true });
    cy.get(':nth-child(1) > .chakra-link > .css-9j8rml > .css-exxvhc > .chakra-icon').should('be.visible');
    cy.get(':nth-child(1) > .chakra-link > .css-9j8rml > .css-exxvhc > .chakra-text').should('have.text', 'View The Full Range');
    cy.get(':nth-child(1) > .chakra-link > .css-9j8rml > .css-exxvhc > .chakra-text').click();
    cy.get('.css-mmmh0p > .sc-63f68c49-0 > :nth-child(2) > .chakra-link > .css-1sli23t > .sc-97a13253-0').click();
    cy.get('.css-mmmh0p > .sc-63f68c49-0 > :nth-child(2) > .chakra-button').should('have.text', 'Quick buy');
    cy.get('.css-mmmh0p > .sc-63f68c49-0 > :nth-child(2) > .chakra-button').click();
    cy.get(':nth-child(1) > :nth-child(3) > .css-58uf8g > .chakra-button').should('have.text', 'Add');
    cy.get(':nth-child(1) > :nth-child(3) > .css-58uf8g > .chakra-button').click();
    cy.get('.css-1oz4v7j > .sc-a1e2bb0b-0').should('have.text', 'Secure Checkout');
    cy.get('.css-1oz4v7j > .sc-a1e2bb0b-0').click();
    cy.get('.header_cartbox > .chakra-button').click();
    cy.url().should('eq', 'https://www.rocabalighting.co.uk/basket/'); // Verify the URL

    // Click on Checkout
    cy.get('.css-1oz4v7j > .sc-a1e2bb0b-0').click();
    cy.get('.css-bviamb > .chakra-heading').should('have.text', 'Secure Checkout');

    // Fill in the checkout form
    cy.get('.css-1l8fklr > .chakra-button').click();

    // Fill in the form fields (assuming these are your checkout form fields)
        cy.get('.sc-63f68c49-0 > :nth-child(1) > .chakra-radio > .chakra-radio__control').click({force:true});
    cy.get('.css-1bmkjbj > :nth-child(1) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17').type('Jane');
    cy.get(':nth-child(2) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17').type('Brown');
    cy.get(':nth-child(3) > .css-t5rqjb > .sc-a1e2bb0b-17').type('jane.brown@test.com');
   //cy.get(':nth-child(4) > .css-t5rqjb > .sc-a1e2bb0b-17').clear().type('Test Order');
   


    cy.get('.css-1pqc7gs > .chakra-heading').click();
    cy.get('.css-1ceouys > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17').clear().type('SO14 3FH');
    cy.get(':nth-child(4) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17').clear().type('1 Canute Rd');
    cy.get(':nth-child(6) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17').clear().type('Southampton');
    cy.get(':nth-child(8) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17').clear().type('SO14 3FH');
    cy.get(':nth-child(9) > .sc-a1e2bb0b-14 > .css-t5rqjb > .sc-a1e2bb0b-17').clear().type('023 8070 3106');
    cy.get('#addAddressForm > .iOHaFW').click();
    cy.get(':nth-child(1) > .css-0 > .chakra-radio > .chakra-radio__control').click();
    cy.get('.instruction-textarea').click().type('test');
    cy.get(':nth-child(4) > .css-0 > .chakra-radio > .chakra-radio__control').click();

    // Ensure 'Continue' button is visible and enabled
    cy.get('button.chakra-button.sc-a1e2bb0b-0.iOHaFW.css-566luu')
      .should('be.visible')
      .and('not.be.disabled');

    // Click the 'Continue' button
    cy.get('button.chakra-button.sc-a1e2bb0b-0.iOHaFW.css-566luu').click({ force: true });

    // select pay with paypal
    cy.get(':nth-child(3) > .chakra-radio > .chakra-radio__control').click()

    //Click on Confirm Order
    cy.get('.css-gq7ao3 > .chakra-button').click()

    //Enter email
    cy.get('#email').click().type('buyer@carrierbagshop.co.uk')
   
    //click on next button
    cy.get('#btnNext').click()

    // enter password 
    cy.get('#password').click().type('paypaltest10')

    //click on Login
    cy.get('#btnLogin').click()
});
});



















