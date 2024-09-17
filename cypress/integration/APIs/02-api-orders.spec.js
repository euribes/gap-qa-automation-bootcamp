/// <reference types="cypress" /> 

import { onAPIRequest } from "../../support/api-requests"

describe('As an Automation Engineer I am able to', function() {

    before('Create a new Order', () => {
      onAPIRequest.createOrder()
    })

    after('Remove an Order', () => {
        onAPIRequest.removeOrder()
      })

    it('Verify that a specific product can be requested', function() {
      onAPIRequest.retrieveProduct()
    })

})
