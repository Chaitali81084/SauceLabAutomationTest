/// <reference types ="cypress"/>
class Products {
  productName(name) {
    cy.get('[data-test="item-4-title-link"]');
  }

  selectProduct(productName) {
    cy.get(".inventory_item").contains(productName).click();
  }

  getProductPrice() {
    return cy.get(".inventory_details_price").invoke("text");
  }

  getProductDescription() {
    return cy.get('[data-test="inventory-item-desc"]').invoke("text");
  }

  addToCartButton() {
    cy.get('[data-test="add-to-cart"]').click();
    return this;
  }

  shoppingCartLink() {
    cy.get('[data-test="shopping-cart-link"]');
    return this;
  }

  goToCart() {
    cy.get("#shopping_cart_container").click();
  }
}

const products = new Products();
export default products;
