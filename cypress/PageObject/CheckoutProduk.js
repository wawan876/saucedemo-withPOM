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
    sidebar(){
       return cy.xpath("//button[.='Open Menu']").click();
    },
    Chart(){
       return cy.get(".path").click();
    },
    RemoveChart(){
        return cy.get(".btn_secondary.cart_button").click();
    },
    CheckOut(){
        return cy.get(".btn_action.checkout_button").click();
    },
    ContinueShopping(){
        return cy.xpath("//a[.='Continue Shopping']").click();
    }

}

export default CheckOutProduk;