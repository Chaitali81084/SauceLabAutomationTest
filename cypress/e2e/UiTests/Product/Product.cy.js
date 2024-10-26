import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import  products from '../../../support/pages/Products/products.cy';
import menu from '../../../support/pages/Menu/menu.cy'

/// <reference types="cypress"/>

When('I click on product name {string}', (productname) => {
    cy.get('div').contains(productname, { matchCase: false }).click()
// products.addToCartButton()

// cy.get('[data-test="shopping-cart-badge"]').should('have.length', 1)
// cy.get('[data-test="shopping-cart-link"]').click()

// cy.get('[data-test="inventory-item-name"]').should('contain.text','Sauce Labs Backpack')
// cy.get('[data-test="item-quantity"]').should('have.length', 1)


});

When('I add to the cart', () => {
    products.addToCartButton()
    cy.get('[data-test="shopping-cart-badge"]').should('have.length', 1)
})

And('I see product {string} added to the cart', (productname) => {
    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="inventory-item-name"]').should('contain.text',productname)
    cy.get('[data-test="item-quantity"]').should('have.length', 1)
})

Then('I logout',() => {
menu.logout()
})

And('I am on login Page',() => {
    cy.url().should('eq', 'https://www.saucedemo.com/')
},
    
)



