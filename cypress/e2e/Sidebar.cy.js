import Login from "../PageObject/Login";
import Sidebar from "../PageObject/Sidebar";
import Data from "../fixtures/Data.json"

describe('Siderbar', () => {
    beforeEach ('Login', () => {
    Login.visitLogin();
    Login.username(Data[0].usernamevalid1);
    Login.password(Data[0].passwordvalid1);
    Login.btnLogin();
    Login.assertionloginsuccess();
    })

    it('AllItem',() => {
        Sidebar.MenuSidebar();
        Sidebar.AllItem();
    })
    it('About',() => {
        Sidebar.MenuSidebar();
        Sidebar.About();
    })
    it('Logout',() => {
        Sidebar.MenuSidebar();
        Sidebar.Logout();
    });
    it('ResetAppState',() => {
        Sidebar.MenuSidebar();
        Sidebar.ResetAppState();
    });

});