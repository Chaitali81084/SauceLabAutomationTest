import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import products from "../../../support/pages/Products/products.cy";
import menu from "../../../support/pages/Menu/menu.cy";

/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit("https://www.saucedemo.com/v1/index.html");
});

after(() => {
  cy.clearCookies();
});

Then("I select a multiple products from inventory page", (productname) => {
  productname.hashes().forEach((element) => {
    cy.log(element.productname);
    cy.selectproduct(element.productname);
  });
});

Then("I sort products from {string}", (sortorder) => {
  switch (sortorder) {
    case "az":
      cy.checkAtoZsorting();
      break;
    case "za":
      cy.checkZtoAsorting();
      break;
    case "lohi":
      cy.checklowtohighpricesorting();
      break;
    case "hilo":
      cy.checkhightolowpricesorting();
      break;
    default:
      cy.log("No option found ");
  }
});

When("I click on product name {string}", (productname) => {
  cy.get("div").contains(productname, { matchCase: false }).click();
});

When("I add to the cart", () => {
  products.addToCartButton();
});

And("I see product {string} added to the cart", (productname) => {
  cy.get('#shopping_cart_container').click();

  cy.get('.cart_item_label').should(
    "contain.text",
    productname
  );
});

And("I see products added to the cart", (productname) => {
  productname.hashes().forEach((element) => {
    cy.get('#shopping_cart_container').click();

    cy.get('.cart_item_label').should(
      "contain.text",
      element.productname
    );
  });
  
});


Then("I logout", () => {
  menu.logout();
});

And("I am on login Page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/v1/index.html");
});

And("I login again", () => {
  cy.login();
});
