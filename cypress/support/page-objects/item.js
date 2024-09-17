export class Item{

    elements ={
        getaddCartButton:() => cy.get('.single_add_to_cart_button'),
        getgoToCart:() => cy.get('a.cart-contents')
    }

    cartProcess(){
        this.addItemsToCart()
        this.goToCart()
    }


    addItemsToCart(){
        this.elements.getaddCartButton().click()
    }

    goToCart(){
        this.elements.getgoToCart().click()
    }


}

export const onItem = new Item()