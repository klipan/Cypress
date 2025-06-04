describe('pizza nutella', () => {
    it('limun tart', () => {
      cy.visit('/');
      cy.get('#search-query').clear().type('hammer');
      cy.get('[data-test="search-submit"]').click();
      cy.get('a').contains('Thor Hammer').click();
      cy.get('[data-test="product-name"]').should('have.text','Thor Hammer');
      cy.get('[data-test="quantity"]').click();
      cy.get('[data-test="quantity"]').type('10');
      cy.get('[data-test="quantity"]').clear().type('10');
      cy.get('[data-test="quantity"]').clear().type('11');
      cy.get('[data-test="add-to-cart"]').click();
    })
  })