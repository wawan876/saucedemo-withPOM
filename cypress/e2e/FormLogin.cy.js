import Login from "../PageObject/Login";
import Data from "../fixtures/Data.json"

describe('Login', () => {
    beforeEach(() => {
         Login.visitLogin();
    });

    it('Login Succes', () => {
        Login.username(Data[0].usernamevalid1);
        Login.password(Data[0].passwordvalid1);
        Login.btnLogin();
        cy.url().should('include', '/inventory.html');
    });

    it('Username Valid & Password Not Regist', () => {
        Login.username(Data[1].usernamevalid2);
        Login.password(Data[1].passwordnoregist2);
        Login.btnLogin();
        Login.assertionloginfailed();

    });

    it('Username Invalid & Password Regist', () => {
        Login.username(Data[2].usernameinvalid);
        Login.password(Data[2].passwordvalid2);
        Login.btnLogin();
        Login.assertionloginfailed();

    });
});
