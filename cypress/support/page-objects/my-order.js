
export class Orders{

    elements = {
        getUsername: () => cy.get('#username'),
        getPassword: () => cy.get('#password'),
        getLoginButton: () => cy.get('.woocommerce-button'),
        getMyOrdersList: () => cy.get('.woocommerce-MyAccount-navigation ul li:nth-child(2)'),
        getMyLastOrder: () => cy.get('.woocommerce-orders-table tbody tr:nth-child(1) td:last-child a'),
    }

    acessToTheShop() {
        cy.visit("/")
    }

    login() {
        this.elements.getUsername().type("cytest@yopmail.com")
        this.elements.getPassword().type("aHehXT5Xm3t7jBzzGQrmQXWj")
        this.elements.getLoginButton().first().click()
    }

    acesstoMyOrder() {
        this.elements.getMyOrdersList().click()
        this.elements.getMyLastOrder().click()
    }

}

export const onOrders = new Orders()
