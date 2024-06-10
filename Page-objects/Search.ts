import { Locator ,Page } from "@playwright/test";
 export class SearchPage {
  readonly page :Page
  searchButton : string
  searchIcon : string
  result : string
  

  constructor(page){
    this.page = page;
    this.searchButton= "//input[@id='q']";
    this.searchIcon = "//button[@class='search-box__button--1oH7' and @data-spm-click='gostr=/lzdpub.header.search;locaid=d_go']"
    this.result= ""
  }

 async navigate(){
  await this.page.goto("https://www.daraz.com.np/")
  await this.page.waitForTimeout(10000)

 }

 async cartOnClick()
 {

  await this.page.fill(this.searchButton , "roller")
  await this.page.click(this.searchIcon)


 }


}