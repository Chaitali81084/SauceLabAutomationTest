/// <reference types ="cypress"/>
class Menu {
  menuHeader() {
    cy.get(".bm-burger-button").click();
    return this;
  }

  logout() {
    this.menuHeader();
    cy.wait(1000);
    cy.get('#logout_sidebar_link').click();
    return this;
  }
}

const menu = new Menu();
export default menu;
