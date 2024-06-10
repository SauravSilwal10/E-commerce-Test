import { Locator ,Page } from "@playwright/test";
 export class DropDown {
  readonly page :Page
  
  

  constructor(page){
    this.page = page;
  }

 async navigate(){
  await this.page.goto("https://the-internet.herokuapp.com/dropdown")
 }

 async dropDownClick()
 {
  await this.page.locator("#dropdown").selectOption("Option 1");

 }


}


