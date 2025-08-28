const ListItem ={

    ListItemAtoZ(){
        cy.get(".product_sort_container").select("Name (A to Z)");
    },
    ListItemZtoA(){
       cy.get(".product_sort_container").select("Name (Z to A)");
    },
    ListItemPricefromthelow(){
        cy.get(".product_sort_container").select("Price (low to high)");
    },
    ListItemPricefromthehigh(){
        cy.get(".product_sort_container").select("Price (high to low)");
    }

}
export default ListItem;