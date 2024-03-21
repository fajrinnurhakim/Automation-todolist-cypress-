class Read {
    readSuccess() {
        cy.loginCommand(
            Cypress.env("email_login"),
            Cypress.env("password_login")
        );
        cy.get("#tanggal").type("2024-03-21");
    }
}

export default new Read();
