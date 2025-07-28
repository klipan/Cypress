import ProductSelection from '../support/pageObjects/ProductSelection';
import quantity from '../support/pageObjects/quantity';

describe('autotest', () => {
    it('search product', () => {
        ProductSelection.visit('/');
        ProductSelection.ime('Thor Hammer')
        ProductSelection.search();
        ProductSelection.select('Thor Hammer');
        ProductSelection.verify('Thor Hammer');
        quantity.quantity(10);
        quantity.addToCart();
        quantity.verifyMessage(' You can only have one Thor Hammer in the cart. ')


    //  cy.get('[data-test="quantity"]').click();
    //  cy.get('[data-test="quantity"]').type('10');
     // cy.get('[data-test="quantity"]').clear().type('10');
     // cy.get('[data-test="quantity"]').clear().type('11');
     // cy.get('[data-test="add-to-cart"]').click();
    })
  })