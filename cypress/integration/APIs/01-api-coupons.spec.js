/// <reference types="cypress" /> 

import { onAPIRequest } from "../../support/api-requests"

describe('As an Automation Engineer I am able to', function() {

    before('Create a new Coupon', () => {
      onAPIRequest.createCoupon()
    })

    after('Remove Coupon & Order', () => {
      onAPIRequest.removeCoupon()
    })

    it('Verify that a specific coupon can be requested', function() {
      onAPIRequest.retrieveCoupon()
    })

})


