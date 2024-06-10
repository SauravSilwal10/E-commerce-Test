import { Locator ,Page } from "@playwright/test";
 export class LoginPage {
  readonly page :Page
  usernameInput : string
  passwordInput : string
  errorMessage : string
  loginButton  : string

  constructor(page){
    this.page = page;
    this.usernameInput = "//input[@id='user-name']";
    this.passwordInput = "//input[@id='password']";
    this.loginButton = "//input[@id='login-button']";
    this.errorMessage = "//h3[contains(text(),'Epic sadface: Username and password do not match a')]";
  }

 async navigate(){
  await this.page.goto("https://www.saucedemo.com/")

 }

 async login(username , password)
 {
await this.page.fill(this.usernameInput , username)
await this.page.fill(this.passwordInput ,password )
await this.page.click(this.loginButton)
 }

 async getErrorMessage()
 {
 return await this.page.textContent(this.errorMessage)
 }

}