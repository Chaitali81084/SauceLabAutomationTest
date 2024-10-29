/// <reference types ="cypress"/>
class Cart {
  removeProduct() {
    cy.get(".btn_secondary").contains("REMOVE").click();

    return this;
  }

  checkoutButton() {
    cy.get(".btn_action").contains("REMOVE").click();
    return this;
  }
}

const cart = new Cart();
export default cart;
