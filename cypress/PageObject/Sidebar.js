const Sidebar = {

    MenuSidebar(){
        cy.xpath("//button[.='Open Menu']").click();
    },
    AllItem(){
        cy.get("#inventory_sidebar_link").click();
    },
    About(){
        cy.get("#about_sidebar_link").click();
    },
    Logout(){
        cy.get("#logout_sidebar_link").click();
    },
    ResetAppState(){
        cy.get("#reset_sidebar_link").click();
    }
}

export default Sidebar;