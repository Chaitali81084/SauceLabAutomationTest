import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import yourInformation from "../../../support/pages/YourInformation/yourInformation.cy";
import overview from "../../../support/pages/Overview/overview.cy";

Then("I am on Checkout Overview Page", () => {
  cy.contains('span[data-test="title"]', "Checkout: Overview");
});

Then(
  "I Verify all relevant details on the page with {string}",
  (productname) => {
    overview.paymentDetails(productname);
  }
);

Then("I click Finish button", () => {
  overview.clickFinish();
});

And("I see {string}", (ordermessage) => {
  cy.contains('h2[data-test="complete-header"]', ordermessage);
});
