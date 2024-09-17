export class APIRequest{

    createCoupon(){

        let couponcode = Math.floor((Math.random() * 100) + 1);

        cy.request({
            url: "http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/coupons",
            method:"POST",
                auth: 
                    {
                        username: "automation",
                        password: "automation"
                    },
                body: 
                    {
                        "code": couponcode.toString(),
                        "discount_type": "percent",
                        "amount": "20",
                        "individual_use": true,
                        "exclude_sale_items": true,
                        "minimum_amount": "30.00"  
                    }
         }).then((resp)=> {
            cy.wrap(resp.body.id).as('couponID')
         })
    }  

    retrieveCoupon() {
        cy.get('@couponID').then((couponID) => {
        cy.request({
            url: `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/coupons/${couponID}`,
            method:"GET",
                auth: 
                    {
                        username: "automation",
                        password: "automation"
                    }
            })
        })    
        .its("status")
        .should("eq", 200)
    }

    removeCoupon() {
        cy.get('@couponID').then((couponID) => {
            cy.request({
                url: `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/coupons/${couponID}?force=true`,
                method:"DELETE",
                    auth: {
                        username: "automation",
                        password: "automation"
                    }
            })
    })
}

    createOrder(){
        cy.request({
            url: "http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/orders",
            method:"POST",
                auth: 
                {
                    username: "automation",
                    password: "automation"
                },
             body: 
                {
                    payment_method: "bacs",
                    payment_method_title: "Direct Bank Transfer",
                    set_paid: true,
                    customer_id: "181",
                    billing: {
                      first_name: "Test",
                      last_name: "Test2",
                      address_1: "Street 9",
                      city: "Texas",
                      state: "Medellin",
                      postcode: "23443",
                      country: "CO",
                      email: "cytest@yopmail.com",
                      phone: "24324322"
                    },
                    shipping: {
                      first_name: "Test",
                      last_name: "Test2",
                      address_1: "Street 9",
                      city: "Texas",
                      state: "Medellin",
                      postcode: "23443",
                      country: "CO"
                    },
                    line_items: [
                      {
                        product_id: 34,
                        quantity: 1
                      }
                    ],
                    shipping_lines: [
                      {
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "0"
                      }    
                    ],
                    coupon_lines: [
                      {
                          code: "cy_api_08",
                      }
                    ]
                }    
         }).then((resp)=> {
            cy.wrap(resp.body.id).as('orderID'),
            cy.wrap(resp.body.line_items[0].product_id).as('productID')
         })
    }

    retrieveProduct(){
        cy.get('@productID').then((productID) => {
                cy.request({
                    url: `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/products/${productID}`,
                    method:"GET",
                        auth: {
                            username: "automation",
                            password: "automation"
                        }
                })
        })        
        .its("status")
        .should("eq", 200)
 }

    removeOrder(){
        cy.get('@orderID').then((orderID) => {
                cy.request({
                    url: `http://ec2-100-25-33-224.compute-1.amazonaws.com:8000/wp-json/wc/v3/orders/${orderID}?force=true`,
                    method:"DELETE",
                        auth: {
                            username: "automation",
                            password: "automation"
                        }
                })
        })        
        .its("status")
        .should("eq", 200)
 }


}

export const onAPIRequest = new APIRequest()