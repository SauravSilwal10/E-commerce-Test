import { test, expect } from '@playwright/test';
import { DropDown } from '../Page-objects/DropDown';

test.describe('DropDown Page',() =>{
let page;
let dropdownPage;

 test.beforeEach(async ({browser}) =>{
 page = await browser.newPage();
 dropdownPage  = new DropDown (page);
 await dropdownPage.navigate(); 
 })
test.afterEach(async () =>[
  await page.close()
])


test('DropDown Selection query test ',async () =>{
 await dropdownPage.dropDownClick();
})
})

