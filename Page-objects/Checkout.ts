import { Locator ,Page } from "@playwright/test";
 export class CheckOutCart {
  readonly page :Page
  checkoutCart : string
  checkoutButton : string
  firstName : string
  lastName : string
  postalCode: string
  continueButton : string
  overviewCheckout: string

  constructor(page){
    this.page = page;
    this.checkoutCart = "//a[@class='shopping_cart_link']";
    this.checkoutButton = "//button[@id='checkout']";
    this.firstName = "//input[@id='first-name']";
    this.lastName = "//input[@id='last-name']";
    this.postalCode = "//input[@id='postal-code']"
    this.continueButton = "//input[@id='continue']"
    this.overviewCheckout = "//span[@class='title' and @data-test='title' and text()='Checkout: Overview']"
  }

 async navigate(){
  await this.page.goto("https://www.saucedemo.com/inventory.html")

 }

 async cartOnClick()
 {
 await this.page.click(this.checkoutCart)
 await this.page.click(this.checkoutButton)
 }


 async checkOutInformation()
 {
    await this.page.fill(this.firstName , "admin")
    await this.page.fill(this.lastName ,"admin" )
    await this.page.fill(this.postalCode, "777")
    await this.page.click(this.continueButton)
   
 }
 async checkoutOverview(){
  return await this.page.textContent(this.overviewCheckout)
 }
}