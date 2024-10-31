/// <reference types ="cypress"/>
class Overview {
  verifyOrderSummary(productName) {
    cy.log("order");
    cy.log(productName);
    cy.get(".inventory_item_name").then(($elements) => {
      const orig_products = Array.from($elements).map((el) => el.innerText);

      expect(orig_products).to.include(productName);
    });
    return this;
  }

  completePurchase() {
    cy.get(".btn_action").contains("FINISH").click();
  }
}
const overview = new Overview();
export default overview;
