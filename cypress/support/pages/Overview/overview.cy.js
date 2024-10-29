/// <reference types ="cypress"/>
class Overview {
  paymentDetails(productname) {
    cy.get('[data-test="inventory-item-name"]').should(
      "contain.text",
      productname
    );
    cy.get('[data-test="payment-info-label"]').should("not.be.empty");
    cy.get('[data-test="shipping-info-label"]').should("not.be.empty");
    cy.get('[data-test="total-label"]').should("not.be.empty");
    return this;
  }
  clickFinish() {
    cy.get(".btn").contains("Finish").click();
  }

  verifyOrderSummary(productName, productPrice, productDescription) {
    cy.get(".inventory_item_name").should("contain", productName);
    cy.get(".inventory_item_price").should("contain", productPrice);
    cy.get(".inventory_item_desc").should("contain", productDescription);
  }

  completePurchase() {
    cy.get("#finish").click();
  }
}
const overview = new Overview();
export default overview;
