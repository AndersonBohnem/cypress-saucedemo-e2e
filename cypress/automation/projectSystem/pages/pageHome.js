import AttributesHome from "../attributes/attributesHome";

class PageHome {
  validateTitleHome() {
    cy.get(AttributesHome.titleHome)
      .should("be.visible")
      .and("have.text", "Swag Labs");
  }

  selectFirstProductInCart() {
    cy.get(AttributesHome.inventoryItemName).first().click();
  }

  addToCart() {
    cy.get(AttributesHome.buttonAddToCart).click();
  }

  goToCart() {
    cy.get(AttributesHome.buttonGoToCart).click();
  }
}

export default PageHome;
