import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import cart from "../../../support/pages/Cart/cart.cy";

When("I click remove button to remove product", () => {
  cart.removeProduct();
});

When("the cart is empty", () => {
  cy.get('[data-test="shopping-cart-badge"]').should("have.length", 0);
});
