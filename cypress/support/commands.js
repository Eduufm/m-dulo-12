// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('adicionarProduto', (nomeProduto, quantidade) => {

    cy.get('[class="product-block grid"]')
        .contains(nomeProduto)
        .click();
    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Green").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get(".woocommerce-message").should(
        "contain",
        quantidade + " × “Abominable Hoodie” foram adicionados no seu carrinho."
    );
    cy.get(".woocommerce-message > .button").click();
    cy.wait(5);
    cy.get(".checkout-button").click({ force: true });


});
