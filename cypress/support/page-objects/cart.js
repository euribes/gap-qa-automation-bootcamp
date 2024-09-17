export class Cart{
    elements ={
        getProceedToCheckoutButton:() => cy.get('.checkout-button')
    }


    ProceedToCheckout(){
        this.elements.getProceedToCheckoutButton().click()
    }

  
}

export const onCart = new Cart()