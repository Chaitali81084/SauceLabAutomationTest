/// <reference types ="cypress"/>
class LoginPage {
  enterUserNamePassword(username, password) {
    cy.get('input[data-test="username"]').type(username);
    cy.get('input[data-test="password"]').type(password);
    return this;
  }
  clickSubmitButton() {
    cy.get('input[data-test="login-button"]').click();
    return this;
  }

  errorMessage(error_message) {
    cy.get('h3[data-test="error"]').should("have.text", error_message);
    return this;
  }

  verifyLoginSuccess() {
    cy.url().should("include", "/inventory");
    cy.get("#inventory_container").should("be.visible");
  }
}
const login = new LoginPage();
export default login;
