/// <reference types ="cypress"/>
class Overview {
  paymentDetails(productname) {
    cy.get('[data-test="inventory-item-name"]').should(
      "contain.text",
      productname
    );
    cy.get('[data-test="payment-info-label"]').should("not.be.empty");
    cy.get('[data-test="shipping-info-label"]').should("not.be.empty");
    cy.get('.summary_total_label').should("not.be.empty");
    return this;
  }

  verifyOrderSummary(productName) {
    cy.get(".inventory_item_name").should("contain", productName);
    cy.get(".inventory_item_price").should("not.be.empty");;
    cy.get('.summary_total_label').should("not.be.empty");
    return this;
  }

  completePurchase() {
    cy.get(".btn_action").contains("FINISH").click();
  }
}
const overview = new Overview();
export default overview;
