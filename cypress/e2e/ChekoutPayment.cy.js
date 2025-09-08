import Login from "../PageObject/Login";
import Data from "../fixtures/Data.json";
import CheckOutProduk from "../PageObject/CheckoutProduk";
import ListItem from "../PageObject/ListItem";


describe ("Checkout Produk",() => {
   beforeEach (() => {
    Login.visitLogin();
    Login.username(Data[0].usernamevalid1);
    Login.password(Data[0].passwordvalid1);
    Login.btnLogin();
    Login.assertionloginsuccess();
    ListItem.ListItemAtoZ();

   })

   it('Succes Checkout Produk Backpack', () => {
        CheckOutProduk.BackPack();
        CheckOutProduk.iconcheckout();
        CheckOutProduk.CheckOut();
        CheckOutProduk.FirstName(Data[3].firstname);
        CheckOutProduk.LastName(Data[3].lastname);
        CheckOutProduk.PostalCode(Data[3].postalcode);
        CheckOutProduk.Continue();
        CheckOutProduk.Finish();
        CheckOutProduk.AssertionFinishPayment();
        
   });

   it('Succes Checkout Produk Shirt', () => {
        CheckOutProduk.Shirt();
        CheckOutProduk.iconcheckout();
        CheckOutProduk.CheckOut();
        CheckOutProduk.FirstName(Data[3].firstname);
        CheckOutProduk.LastName(Data[3].lastname);
        CheckOutProduk.PostalCode(Data[3].postalcode);
        CheckOutProduk.Continue();
        CheckOutProduk.Finish();
        CheckOutProduk.AssertionFinishPayment();
        
   });

   it('Succes Checkout Produk Jacket', () => {
        CheckOutProduk.Jacket();
        CheckOutProduk.iconcheckout();
        CheckOutProduk.CheckOut();
        CheckOutProduk.FirstName(Data[3].firstname);
        CheckOutProduk.LastName(Data[3].lastname);
        CheckOutProduk.PostalCode(Data[3].postalcode);
        CheckOutProduk.Continue();
        CheckOutProduk.Finish();
        CheckOutProduk.AssertionFinishPayment();
        
   });

   it('Succes Checkout Produk Onesie', () => {
        CheckOutProduk.Onesie();
        CheckOutProduk.iconcheckout();
        CheckOutProduk.CheckOut();
        CheckOutProduk.FirstName(Data[3].firstname);
        CheckOutProduk.LastName(Data[3].lastname);
        CheckOutProduk.PostalCode(Data[3].postalcode);
        CheckOutProduk.Continue();
        CheckOutProduk.Finish();
        CheckOutProduk.AssertionFinishPayment();
        
   });

   it('Succes Checkout Produk ShirtRed', () => {
        CheckOutProduk.ShirtRed();
        CheckOutProduk.iconcheckout();
        CheckOutProduk.CheckOut();
        CheckOutProduk.FirstName(Data[3].firstname);
        CheckOutProduk.LastName(Data[3].lastname);
        CheckOutProduk.PostalCode(Data[3].postalcode);
        CheckOutProduk.Continue();
        CheckOutProduk.Finish();
        CheckOutProduk.AssertionFinishPayment();
        
   });

   it('Succes Checkout Produk ShirtBlack', () => {
        CheckOutProduk.ShirtBlack();
        CheckOutProduk.iconcheckout();
        CheckOutProduk.CheckOut();
        CheckOutProduk.FirstName(Data[3].firstname);
        CheckOutProduk.LastName(Data[3].lastname);
        CheckOutProduk.PostalCode(Data[3].postalcode);
        CheckOutProduk.Continue();
        CheckOutProduk.Finish();
        CheckOutProduk.AssertionFinishPayment();
        
   });
})