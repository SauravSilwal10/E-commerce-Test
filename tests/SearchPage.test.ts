import { test, expect } from '@playwright/test';
import { SearchPage } from '../Page-objects/Search';

test.describe('Search Page',() =>{
let page;
let searchPage;

 test.beforeEach(async ({browser}) =>{
 page = await browser.newPage();
 searchPage  = new SearchPage (page);
 await searchPage.navigate(); 
 })
test.afterEach(async () =>[
  await page.close()
])


test('Search query test ',async () =>{
 await searchPage.cartOnClick();
})
})

