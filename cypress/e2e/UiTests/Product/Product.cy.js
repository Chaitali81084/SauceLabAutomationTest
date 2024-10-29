import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import products from "../../../support/pages/Products/products.cy";
import menu from "../../../support/pages/Menu/menu.cy";

/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit("https://www.saucedemo.com/");
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
  cy.get('[data-test="shopping-cart-badge"]').should("have.length", 1);
});

And("I see product {string} added to the cart", (productname) => {
  cy.get('[data-test="shopping-cart-link"]').click();

  cy.get('[data-test="inventory-item-name"]').should(
    "contain.text",
    productname
  );
  cy.get('[data-test="item-quantity"]').should("have.length", 1);
});

And("I see products added to the cart", (productname) => {
  productname.hashes().forEach((element) => {
    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="inventory-item-name"]').should(
      "contain.text",
      element.productname
    );
  });
  //   cy.get('span[data-test="shopping-cart-badge"]').should("have.length", 2);
});

Then("I see quantity in the cart", () => {
  //  cy.log(cy.get('.shopping_cart_container'))
  cy.get('[data-test="shopping-cart-badge"]').should("have.length", 3);

  // cy.get('.shopping_cart_container').its('length').then((count) =>{

  //     cy.get('a')
  //       .find('.shopping_cart_badge')
  //       .should('have.length', count)

  //     })
});

Then("I logout", () => {
  menu.logout();
});

And("I am on login Page", () => {
  cy.url().should("eq", "https://www.saucedemo.com/");
});

And("I login again", () => {
  cy.login();
});
