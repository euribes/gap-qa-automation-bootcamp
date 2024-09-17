export class Home{

    elements = {
        getSearchField:() => cy.get('#masthead input.search-field') 
    }
    
    searchProduct(productName){
        this.elements.getSearchField().type(productName)
    }
}

export const onHome = new Home()