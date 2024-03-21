class Register {
    registerSuccess() {
        cy.get("a").contains("Register").click();
        cy.registerCommand(
            Cypress.env("name_register"),
            Cypress.env("email_register"),
            Cypress.env("password_register")
        );
    }
    registerNameRequired() {
        cy.get("a").contains("Register").click();
        cy.registerNoNameCommand(
            Cypress.env("email_register"),
            Cypress.env("password_register")
        );
    }
    registerEmailRequired() {
        cy.get("a").contains("Register").click();
        cy.registerNoEmailCommand(
            Cypress.env("name_register"),
            Cypress.env("password_register")
        );
    }
    registerPasswordRequired() {
        cy.get("a").contains("Register").click();
        cy.registerNoPasswordCommand(
            Cypress.env("name_register"),
            Cypress.env("email_register")
        );
    }
    registerTermRequired() {
        cy.get("a").contains("Register").click();
        cy.registerNoTermCommand(
            Cypress.env("name_register"),
            Cypress.env("email_register"),
            Cypress.env("password_register")
        );
    }
}

export default new Register();
