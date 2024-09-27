class SearchComponent{

    elements={

        searchInput: () => cy.get('#masthead input.search-field'),
        
    };
   
   searchText(text){
       this.elements.searchInput().type(`${text}{enter}`);
   }
}

export const searchComponent= new SearchComponent();
