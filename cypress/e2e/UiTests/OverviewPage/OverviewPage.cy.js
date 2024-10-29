import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import yourInformation from "../../../support/pages/YourInformation/yourInformation.cy";
import overview from "../../../support/pages/Overview/overview.cy";

Then("I am on Checkout Overview Page", () => {
  cy.contains('.subheader', "Checkout: Overview");
});

Then(
  "I Verify all relevant details on the page with {string}",
  (productname) => {
    overview.verifyOrderSummary(productname);
  }
);

Then("I click Finish button", () => {
  overview.completePurchase();
});

And("I see {string}", (ordermessage) => {
    cy.get('.complete-header').should(
        "contain.text",ordermessage);
        
      
});
