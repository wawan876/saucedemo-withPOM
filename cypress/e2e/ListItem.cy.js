import Login from "../PageObject/Login";
import Data from "../fixtures/Data.json"
import ListItem from "../PageObject/ListItem";


describe('', () => {

    beforeEach(() => {
        Login.visitLogin();
        Login.username(Data[0].usernamevalid1);
        Login.password(Data[0].passwordvalid1);
        Login.btnLogin();
        Login.assertionloginsuccess();
    });

    it('A to Z', () => {
        ListItem.ListItemAtoZ();
        
    });
    it('Z to A', () => {
        ListItem.ListItemZtoA();
    });
    it('Price Low to High', () => {
        ListItem.ListItemPricefromthelow();
    });
    it('Price High to Low', () => {
         ListItem.ListItemPricefromthehigh();
    });
});