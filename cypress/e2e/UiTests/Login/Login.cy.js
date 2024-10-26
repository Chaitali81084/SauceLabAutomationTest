import { Given, Then ,When} from 'cypress-cucumber-preprocessor/steps';
import  login from '../../../support/pages/LoginPage/loginPage.cy'
/// <reference types="cypress"/>

Given('user visit saucelabs website with valid details', () => {
    cy.login()  
});

Then('user is on inventory page', () => {
   cy.url().should('contain', '/inventory.html')
});



Given('I visit sauce lab website', () => {
    cy.visit('/')
});



When('user enters the username {string} and password {string}', (username,password) => {
   login.enterUserNamePassword(username,password)
});


When('user clicks on login button', () => {
    login.clickSubmitButton()
});

Then('the error message is displayed {string}', (error_message) => {
    login.errorMessage(error_message)
});


