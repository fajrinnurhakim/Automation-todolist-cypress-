class Login {
    loginSuccess() {
        cy.loginCommand(
            Cypress.env("email_login"),
            Cypress.env("password_login")
        );
    }
    loginEmailRequired() {
        cy.loginNoEmailCommand(Cypress.env("password_login"));
    }
    loginPasswordRequired() {
        cy.loginNoPasswordCommand(Cypress.env("email_login"));
    }
}

export default new Login();
