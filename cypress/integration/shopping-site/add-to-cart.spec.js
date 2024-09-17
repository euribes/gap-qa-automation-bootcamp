import { onCart } from "../../support/page-objects/cart"
import { onHome } from "../../support/page-objects/home"
import { onItem } from "../../support/page-objects/item"

describe('As a user I go the Shopping Site', function() {

    beforeEach('Open Testing Playground', function() {
            cy.openHomePage()
    })

    it('And I am able to add a product to the Cart', function() {

        onHome.searchProduct('Hoodie with Pocket{enter}')
        cy.contains('Hoodie with Pocket').should("be.visible")
        onItem.cartProcess()
        onCart.ProceedToCheckout()
        cy.url().should('include', '/checkout')
    })
})
