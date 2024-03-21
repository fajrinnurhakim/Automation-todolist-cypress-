import Login from "../support/page_object/login";

describe("Todolist Website | Login", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Login Success", () => {
        Login.loginSuccess();
    });
    it("Login Email Required", () => {
        Login.loginEmailRequired();
    });
    it("Login Password Required", () => {
        Login.loginPasswordRequired();
    });
});
