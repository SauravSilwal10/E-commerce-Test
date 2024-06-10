import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page-objects/LoginPage';
import { CheckOutCart } from '../Page-objects/Checkout';


test.describe('Checkout Page',() =>{
let page;
let loginPage;
let checkoutPage;

 test.beforeEach(async ({browser}) =>{
 page = await browser.newPage();
 loginPage  = new LoginPage(page);
 checkoutPage  = new CheckOutCart(page);
 await loginPage.navigate(); 
 await loginPage.login("error_user","secret_sauce")
 await checkoutPage.navigate(); 
 
 })
test.afterEach(async () =>[
  await page.close()
])

test('Checkout Test',async () =>{
 await checkoutPage.cartOnClick();
 await checkoutPage.checkOutInformation();
 const overview = await checkoutPage.checkoutOverview();
 expect(overview).toBe("Checkout: Overview")



})


})