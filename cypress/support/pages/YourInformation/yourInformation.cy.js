/// <reference types ="cypress"/>
import customerDetails from "../../../fixtures/customerDetails.json";
class YourInformation {
  pageTitle() {
    cy.get('[data-test="title"]');
    return this;
  }

  enterDetails(firstname, lastname, postcode) {
    cy.get('input[data-test="firstName"]').type(customerDetails.firstname);
    cy.get('input[data-test="lastName"]').type(customerDetails.lastname);
    cy.get('input[data-test="postalCode"]').type(customerDetails.postcode);
    return this;
  }

  clickContinue() {
    cy.get('input[data-test="continue"]').click();
  }
}

const yourInformation = new YourInformation();
export default yourInformation;
