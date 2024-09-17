export class Checkout{
    elements ={
        getfirstnameField:() => cy.get('#billing_first_name'),
        getlastnameField:() =>cy.get('#billing_last_name'),
        getcountryField:() =>cy.get('#select2-billing_country-container'),
        getaddressField:() =>cy.get('#billing_address_1'),
        getcityField:() =>cy.get('#billing_city'),
        getstateField:() =>cy.get('#billing_state'),
        getphoneField:() =>cy.get('#billing_phone'),
        getemailField:() =>cy.get('#billing_email'),

        differentAdressCheckbox:() =>cy.get('#ship-to-different-address-checkbox'),
        termsCheckbox:() =>cy.get('#terms'),

        placeOrderButton:() =>cy.get('#place_order')
    }


    fillCheckoutFields(firstname, lastname, country, address, city, state, phone, email  ){

        cy.fixture('info').then(function (data){ this.data = data})

        this.elements.getfirstnameField().type(this.data.firstname)
        this.elements.getlastnameField().type(this.data.lastname)
        this.elements.getcountryField().type(this.data.country)
        this.elements.getaddressField().type(this.data.address)
        this.elements.getcityField().type(this.data.city)
        this.elements.getstateField().type(this.data.state)
        this.elements.getphoneField().type(this.data.phone)
        this.elements.getemailField().type(this.data.email)
    }


    completeProcess(){
        this.elements.differentAdressCheckbox().uncheck()
        this.elements.termsCheckbox().check()
        this.elements.placeOrderButton().click()

    }
  
}

export const onCheckout = new Checkout()