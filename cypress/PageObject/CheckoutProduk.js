const CheckOutProduk = {

    BackPack(){
        return cy.get('.btn_primary.btn_inventory').eq(0).click();
    },
    Shirt(){
        return cy.get('.btn_primary.btn_inventory').eq(1).click();
    },
    Jacket(){
        return cy.get('.btn_primary.btn_inventory').eq(2).click();
    },
    Onesie(){
        return cy.get('.btn_primary.btn_inventory').eq(3).click();
    },
    ShirtRed(){
        return cy.get('.btn_primary.btn_inventory').eq(4).click();
    },
    ShirtBlack(){
        return cy.get('.btn_primary.btn_inventory').eq(5).click();
    },
     //icon chart
    iconcheckout(){
        cy.get(".svg-inline--fa").click();
    },
    RemoveChart(){
        return cy.get(".btn_secondary.cart_button").click();
    },
    CheckOut(){
        return cy.get(".btn_action.checkout_button").click();
    },
    ContinueShopping(){
        return cy.xpath("//a[.='Continue Shopping']").click();
    },

    //checkout:your information
    FirstName(firstname){
        return cy.get("#first-name").type(firstname);
    },
    LastName(lastname){
        return cy.get("#last-name").type(lastname);
    },
    PostalCode(postalcode){
        return cy.get("#postal-code").type(postalcode);
    },
    Continue(){
        return cy.get(".btn_primary.cart_button").click();
    },
    CancelShopping(){
        return cy.get(".btn_secondary.cart_button").click();
    },
    Finish(){
        return cy.get(".btn_action.cart_button").click();
    },
    AssertionFinishPayment(){
        cy.url().should('include', '/checkout-complete.html')
    }


}

export default CheckOutProduk;