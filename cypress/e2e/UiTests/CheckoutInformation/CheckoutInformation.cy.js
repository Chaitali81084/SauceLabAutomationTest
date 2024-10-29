import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import yourInformation from "../../../support/pages/YourInformation/yourInformation.cy";
import cart from "../../../support/pages/Cart/cart.cy";

When("I click on Checkout button", () => {
  cart.checkoutButton();
});

And("I click continue", () => {
    yourInformation.clickContinue();
  });

And("I follow the checkout process", () => {
  cy.checkOut()
});
