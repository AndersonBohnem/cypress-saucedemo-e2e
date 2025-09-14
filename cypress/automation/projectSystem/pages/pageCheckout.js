import AttributesCheckout from "../attributes/attributesCheckout";


class PageCheckout {

    validatePageCheckout() {
        cy.get(AttributesCheckout.titleCheckout)
            .should('be.visible')
            .and('contain', 'Checkout');
}

    insertDataInForm() {
        cy.get(AttributesCheckout.inputFirstName).type('Teste');
        cy.get(AttributesCheckout.inputLastName).type('Automatizado');
        cy.get(AttributesCheckout.inputPostalCode).type('0123000');
        cy.get(AttributesCheckout.buttonContinue).click();
    }

    validatePageFinishOrder() {
        cy.get(AttributesCheckout.inventoryItemName).should('be.visible');
    }

    finishOrder() {
        cy.get(AttributesCheckout.buttonFinish).click();
    }

    validateOrderComplete() {
        cy.get(AttributesCheckout.titleCompleteOrder)
            .should('be.visible')
            .and('have.text', 'Thank you for your order!');
    }

}

export default PageCheckout;
