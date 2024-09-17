/// <reference types="cypress" /> 

import { onOrders } from "../../support/page-objects/my-order"

describe('As a Shop User I am able to', function() {

    it('Verify that the order shows the proper discount value', function() {

        onOrders.acessToTheShop()
        onOrders.login()
        onOrders.acesstoMyOrder()
        cy.contains('-$9.00').should('be.visible')
     })

})

