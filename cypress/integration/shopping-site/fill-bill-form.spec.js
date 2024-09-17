import { onCart } from "../../support/page-objects/cart"
import { onHome } from "../../support/page-objects/home"
import { onItem } from "../../support/page-objects/item"
import { onCheckout } from "../../support/page-objects/checkout"

describe('As a user I go the Shopping Site', function() {

    beforeEach('Open Testing Playground and Add a Product to the Cart', function() {

            cy.openHomePage()
            onHome.searchProduct('Hoodie with Pocket{enter}')
            onItem.cartProcess()
            onCart.ProceedToCheckout()
    })

    it('And I am able to fill out the Billing Information', function() {

        onCheckout.fillCheckoutFields()
        onCheckout.completeProcess()
        cy.contains('Order received').should('be.visible')
    
    })
})