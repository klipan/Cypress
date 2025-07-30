import ProductSelection from '../support/pageObjects/ProductSelection';
import quantity from '../support/pageObjects/quantity';
import Cart from '../support/pageObjects/Cart';

describe('negative', () => {
    it('error message', () => {
        ProductSelection.selection('Hammer', 'Thor Hammer', 'Thor Hammer')
        quantity.quantity('10', ' You can only have one Thor Hammer in the cart. ')
    });
});
describe('positive', () => {
    it('successfully added', () => {
        ProductSelection.selection('Hammer', 'Thor Hammer', 'Thor Hammer')
        quantity.quantity('1', ' Product added to shopping cart. ')
        Cart.cart();



    //  cy.get('[data-test="quantity"]').click();
    //  cy.get('[data-test="quantity"]').type('10');
     // cy.get('[data-test="quantity"]').clear().type('10');
     // cy.get('[data-test="quantity"]').clear().type('11');
     // cy.get('[data-test="add-to-cart"]').click();

    });
});