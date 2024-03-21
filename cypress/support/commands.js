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
Cypress.Commands.add("registerCommand", (name, email, password) => {
    cy.get("#name1").type(name);
    cy.get("#email1").type(email);
    cy.get("#password1").type(password);
    cy.get("#term").click();
    cy.get("button[type='submit']").click();
    cy.get(".swal2-container").should("be.visible");
    cy.wait(500);
    cy.get("button").contains("OK").click();
});

Cypress.Commands.add("registerNoNameCommand", (email, password) => {
    cy.get("#email1").type(email);
    cy.get("#password1").type(password);
    cy.get("#term").click();
    cy.get("button[type='submit']").click();
    cy.get("#name1").should("have.attr", "required");
});

Cypress.Commands.add("registerNoEmailCommand", (name, password) => {
    cy.get("#name1").type(name);
    cy.get("#password1").type(password);
    cy.get("#term").click();
    cy.get("button[type='submit']").click();
    cy.get("#email1").should("have.attr", "required");
});

Cypress.Commands.add("registerNoPasswordCommand", (name, email) => {
    cy.get("#name1").type(name);
    cy.get("#email1").type(email);
    cy.get("#term").click();
    cy.get("button[type='submit']").click();
    cy.get("#password1").should("have.attr", "required");
});

Cypress.Commands.add("registerNoTermCommand", (name, email, password) => {
    cy.get("#name1").type(name);
    cy.get("#email1").type(email);
    cy.get("#password1").type(password);
    cy.get("button[type='submit']").click();
    cy.get(".swal2-container").should("be.visible");
    cy.wait(500);
    cy.get("button").contains("OK").click();
});

Cypress.Commands.add("loginCommand", (email, password) => {
    cy.get("#email1").type(email);
    cy.get("#password1").type(password);
    cy.get("button[type='submit']").click();
    cy.get(".swal2-container").should("be.visible");
    cy.wait(500);
    cy.get("button").contains("OK").click();
    cy.url().should("include", "/home");
});

Cypress.Commands.add("loginNoEmailCommand", (password) => {
    cy.get("#password1").type(password);
    cy.get("button[type='submit']").click();
    cy.get("#email1").should("have.attr", "required");
});

Cypress.Commands.add("loginNoPasswordCommand", (email) => {
    cy.get("#email1").type(email);
    cy.get("button[type='submit']").click();
    cy.get("#password1").should("have.attr", "required");
});
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
