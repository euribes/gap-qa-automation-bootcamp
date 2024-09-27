class CheckoutPage{

    title='checkout';
    url='/checkout';

    elements={
        firstName:()=> cy.get('#billing_first_name'),
        lastName:()=> cy.get('#billing_last_name'),
        countryRegion:()=> cy.get('#select2-billing_country-container'),
        streetAddress: ()=> cy.get('#billing_address_1'),
        townCity: ()=> cy.get('#billing_city'),
        state: ()=> cy.get('#select2-billing_state-container'),
        zip: ()=> cy.get('#billing_postcode'),
        phone: ()=> cy.get('#billing_phone'),
        email: ()=> cy.get('#billing_email'),
        shipDifferentAddressCheckbox: ()=> cy.get('#ship-to-different-address-checkbox'),
        termsContiditionsCheckbox: ()=> cy.get('#terms'),
        errorMessage: ()=> cy.get('.woocommerce-error'), 
        placeholderButton: ()=> cy.get('#place_order'),
        orderReceive: ()=>cy.get('.entry-title'),
    };

    fillForms(firstName, lastName, streetAddress,townCity, zip, phone, email){
        this.elements.firstName().type(`${firstName}`);
        this.elements.lastName().type(`${lastName}`);
        this.elements.streetAddress().type(`${streetAddress}`);
        this.elements.townCity().type(`${townCity}`);
        this.elements.zip().type(`${zip}`);
        this.elements.phone().type(`${phone}`);
        this.elements.email().type(`${email}`);
    }

    visit(){
        cy.visit(this.url);
    }
    
}

export const checkoutPage= new CheckoutPage();