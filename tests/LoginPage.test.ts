import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page-objects/LoginPage';

test.describe('Login Page',() =>{
let page;
let loginPage;

 test.beforeEach(async ({browser}) =>{
 page = await browser.newPage();
 loginPage  = new LoginPage(page);
 await loginPage.navigate(); 
 })
test.afterEach(async () =>[
  await page.close()
])

test('Should Login with Valid Credentials',async () =>{
  await loginPage.login('error_user','secret_sauce')
})

test('Should Login with InValid Credentials',async () =>{
  await loginPage.login('error1_user','secret_sauce')
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toBe("Epic sadface: Username and password do not match any user in this service")
})
})



