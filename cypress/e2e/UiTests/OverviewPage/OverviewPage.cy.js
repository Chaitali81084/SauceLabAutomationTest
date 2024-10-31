import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import yourInformation from "../../../support/pages/YourInformation/yourInformation.cy";
import overview from "../../../support/pages/Overview/overview.cy";

Then("I am on Checkout Overview Page", () => {
  cy.contains(".subheader", "Checkout: Overview");
});

Then("I Verify all relevant details on the page", (productname) => {
  productname.hashes().forEach((element) => {
    overview.verifyOrderSummary(element.productname);
  });

  cy.validatePriceAtCheckout().then((numberorig_products) => {
    const totalpricewithouttax = numberorig_products.reduce(
      (partialSum, a) => partialSum + a,
      0
    );

    // coverting price to a string for comparison
    const pricestring = String(totalpricewithouttax);
    cy.get(".summary_subtotal_label").then(($price) => {
      expect($price.text()).to.include(pricestring);
    });
  });
});

Then("I click Finish button", () => {
  overview.completePurchase();
});

And("I see {string}", (ordermessage) => {
  cy.get(".complete-header").should("contain.text", ordermessage);
});
