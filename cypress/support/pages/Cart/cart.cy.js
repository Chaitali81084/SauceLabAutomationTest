/// <reference types ="cypress"/>
class Cart {
  removeProduct() {
    cy.get(".btn").contains("Remove").click();

    return this;
  }

  checkoutButton() {
    cy.get(".btn").contains("Checkout").click();

    return this;
  }
}

const cart = new Cart();
export default cart;
