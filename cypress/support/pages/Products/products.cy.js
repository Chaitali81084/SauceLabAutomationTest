/// <reference types ="cypress"/>
class Products {

    productName(name) {
        cy.get('[data-test="item-4-title-link"]')
    }
   
    addToCartButton() {
        cy.get('[data-test="add-to-cart"]').click()
      return this;
    }

    shoppingCartLink() {
        cy.get('[data-test="shopping-cart-link"]')
      return this;
    }
}

const products = new Products();
   export default products;