/// <reference types="Cypress" />

describe('Shopping Cart tests', () => {
  context('Add two products to the shopping cart, use the coupon and verify the discount', () => {
    before(()=>{
      cy.visit('/');
    });

    it('should be able to do all the steps specified in the context', () => {
      cy.get('#masthead .search-field').type('Sunglasses{enter}');
      cy.contains('Add to cart').click();
      cy.get('[aria-label="Add “Beanie” to your cart"]').click();
      cy.get('[title="View cart"]').click();
      cy.get('[id="coupon_code"]').type('10off');
      cy.contains('Apply coupon').click();
      cy.get('[data-title="Coupon: 10off"]').should('be.visible')
    })
  });
    
});