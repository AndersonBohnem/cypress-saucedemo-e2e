import AttributesLogin from "../attributes/attributesLogin";

class PageLogin {
  accessStore(url) {
    cy.viewport(1920, 1080);
    cy.visit(url);
  }

  validateTitleLogin() {
    cy.get(AttributesLogin.divTitleLogin)
      .should("be.visible")
      .and("have.text", "Swag Labs");
  }

  loginSuccess(username, password) {
    cy.get(AttributesLogin.inputUsername).type(username);
    cy.get(AttributesLogin.inputPassword).type(password);
    cy.get(AttributesLogin.buttonLogin).click();
  }
}

export default PageLogin;
