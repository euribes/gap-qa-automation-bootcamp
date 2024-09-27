///<reference types="cypress"/>   


import { cartPage } from '../page-objects/pages/cart';
import {ProductPage} from '../page-objects/pages/product-detail';
import {searchComponent} from  '../page-objects/components/search-input';
import {checkoutPage} from '../page-objects/pages/checkout';

describe('Add to cart',()=>{

    beforeEach(()=>{
        cy.visit('/');
    });
    it('should add to cart',()=>{

        // Search for a product
        // Search page
   
        searchComponent.searchText('Belt');
 

        //Product details page 
        ProductPage.elements.title().should('contain','Belt');
        ProductPage.elements.addToCart().click();
        ProductPage.elements.viewToCart().click();

        // Cart page
    
        cartPage.elements.productTitle().should('contain','Belt');
        cartPage.elements.subtotal().should('contain','$55.00');

        cy.url().should('include', cartPage.url);
        cy.url().should('include', cartPage.title);

        cartPage.elements.checkoutButton().click();

        cy.url().should('include', checkoutPage.url);
        cy.url().should('include', checkoutPage.title);
        checkoutPage.fillForms('Diana', 'Ospina', 'Cll 41 A #79-72 Urbanización el Llanito','Rionegro', '00000', '3128914267', 'diana5.ospinal@gmail.com');
        checkoutPage.elements.shipDifferentAddressCheckbox().click();
        checkoutPage.elements.placeholderButton().click();
        checkoutPage.elements.errorMessage().should('be.visible');
        checkoutPage.elements.termsContiditionsCheckbox().click();
        checkoutPage.elements.placeholderButton().click();
        checkoutPage.elements.orderReceive().should('be.visible');

    })

   
} );