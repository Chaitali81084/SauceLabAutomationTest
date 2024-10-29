// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"/>

import loginData from "../fixtures/login.json";
import customerDetails from "../fixtures/customerDetails.json";

//**** This is a Login Function *** */

Cypress.Commands.add("login", (username, password) => {
  cy.get('input[data-test="username"]').type(loginData.username);
  cy.get('input[data-test="password"]').type(loginData.password);
  cy.get('input[data-test="login-button"]').click();
});

Cypress.Commands.add("checkOut", function (username, lastName, zipCode) {
  cy.get(".checkout_button").click();
  cy.get('input[data-test="firstName"]').type(customerDetails.firstname);
  cy.get('input[data-test="lastName"]').type(customerDetails.lastname);
  cy.get('input[data-test="postalCode"]').type(customerDetails.postcode);
});

Cypress.Commands.add("selectInventoryItem", function (text) {
  cy.get(`.inventory_item:contains("${text}") .btn_inventory`).click();
});

Cypress.Commands.add("selectproduct", function (productname) {
  cy.log("check");
  cy.log(productname);

  cy.get(".inventory_list").each(($el) => {
    if ($el.text().includes(productname)) {
      cy.get(".inventory_item_name").contains(productname).click();
      cy.get('[data-test="add-to-cart"]').click();
      cy.go("back");
    }
  });
});

//sorting product from A to Z

Cypress.Commands.add("checkAtoZsorting", () => {
  cy.get('[ class="product_sort_container"]')
    .select("az")
    .should("have.value", "az");

  cy.get(".inventory_item_name").then(($elements) => {
    cy.log($elements.text());
    const orig_products = Array.from($elements).map((el) => el.innerText);
    const asc_sorted_products = Array.from($elements).map((el) => el.innerText);

    cy.log(orig_products[0], asc_sorted_products[0]);
    expect(orig_products).to.deep.equal(asc_sorted_products.sort());
  });
});

//sorting product from Z to A

Cypress.Commands.add("checkZtoAsorting", () => {
  cy.get('[ class="product_sort_container"]').select("za");
  cy.get(".inventory_item_name").then(($elements) => {
    cy.log($elements.text());
    const orig_products = Array.from($elements).map((el) => el.innerText);
    const asc_sorted_products = Array.from($elements).map((el) => el.innerText);

    cy.log(orig_products[0], asc_sorted_products[0]);
    expect(orig_products).to.deep.equal(asc_sorted_products.sort().reverse());
  });
});

//sorting prodcut from low to high
Cypress.Commands.add("checklowtohighpricesorting", () => {
  cy.get('[ class="product_sort_container"]').select("lohi");

  cy.get(".inventory_item_price").then(($elements) => {
    cy.log($elements);
    const orig_products = Array.from($elements).map((el) => el.innerText);
    const asc_sorted_products = Array.from($elements).map((el) => el.innerText);
    cy.pause;
    let numberorig_products = [];
    let numberasc_sorted_products = [];
    for (let i = 0; i < orig_products.length; i++) {
      orig_products[i] = orig_products[i].toString().replace("$", "");
      numberorig_products.push(Number(orig_products[i]));

      asc_sorted_products[i] = asc_sorted_products[i]
        .toString()
        .replace("$", "");
      numberasc_sorted_products.push(Number(asc_sorted_products[i]));
    }

    expect(numberorig_products).to.deep.equal(
      numberasc_sorted_products.sort(function (a, b) {
        return a - b;
      })
    );
  });
});

//sorting prodcut from high to low
Cypress.Commands.add("checkhightolowpricesorting", () => {
  cy.get('[ class="product_sort_container"]').select("hilo");

  cy.get(".inventory_item_price").then(($elements) => {
    cy.log($elements);
    const orig_products = Array.from($elements).map((el) => el.innerText);
    const asc_sorted_products = Array.from($elements).map((el) => el.innerText);
    cy.pause;
    let numberorig_products = [];
    let numberasc_sorted_products = [];
    for (let i = 0; i < orig_products.length; i++) {
      orig_products[i] = orig_products[i].toString().replace("$", "");
      numberorig_products.push(Number(orig_products[i]));

      asc_sorted_products[i] = asc_sorted_products[i]
        .toString()
        .replace("$", "");
      numberasc_sorted_products.push(Number(asc_sorted_products[i]));
    }

    expect(numberorig_products).to.deep.equal(
      numberasc_sorted_products
        .sort(function (a, b) {
          return a - b;
        })
        .reverse()
    );
  });
});
