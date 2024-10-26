/// <reference types ="cypress"/>
class LoginPage {
   
    enterUserNamePassword(username, password) {
        cy.get('input[data-test="username"]').type(username)
        cy.get('input[data-test="password"]').type(password)
      return this;
    }
    clickSubmitButton() {
        cy.get('input[data-test="login-button"]').click()
      return this;
    }

    errorMessage(error_message) {
      cy.get('h3[data-test="error"]').should("have.text",error_message)
    return this;
  }
    
    verifyPageTitle() {
      return cy.title().should("eq", "Products");
    }
}
   const login = new LoginPage();
   export default login;