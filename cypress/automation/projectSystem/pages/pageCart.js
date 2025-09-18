import AttributesCart from "../attributes/attributesCart";

class PageCart {
  goToCheckout() {
    cy.get(AttributesCart.buttonCheckout).filter(":visible").click();
  }
}

export default PageCart;
