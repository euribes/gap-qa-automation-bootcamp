class ProductDetailPage{

    url='';
    elements={

        title: () => cy.get('.product_title'),
        addToCart: () =>cy.contains('button','Add to cart'),
        viewToCart: () =>cy.contains('a','View cart'),
    };

   
   
}

export const ProductPage= new ProductDetailPage();
