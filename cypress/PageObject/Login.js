const Login = {

   visitLogin(){
        cy.visit("https://www.saucedemo.com/v1/")
    },
    username(usernamee)
    {
        return cy.xpath("//input[@id='user-name']").clear().type(usernamee)
    },
    password(passwordd){
        return cy.xpath("//input[@id='password']").clear().type(passwordd)
    },
    btnLogin(){
        return cy.xpath("//input[@id='login-button']").click()
    },
    assertionloginsuccess(){
        cy.url().should('include', '/inventory.html');
    },
    assertionloginfailed(){
        cy.xpath("//h3[contains(text(), 'Epic sadface')]").should('be.visible');
    }

}

export default Login;