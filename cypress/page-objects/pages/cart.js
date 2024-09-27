class CartPage{

    title='cart';
    url='/cart';

    elements={
        productTitle:()=> cy.get('[data-title="Product"]'),
        subtotal:()=> cy.get('[data-title="Subtotal"]'),
        checkoutButton:()=> cy.get('.checkout-button'),
    };

    visit(){
        cy.visit(this.url);
    }
    
}

export const cartPage= new CartPage();