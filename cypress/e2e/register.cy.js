import Register from "../support/page_object/register";

describe("Todolist Website | Register", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Register Success", () => {
        Register.registerSuccess();
    });
    it("Register Name Required", () => {
        Register.registerNameRequired();
    });
    it("Register Email Required", () => {
        Register.registerEmailRequired();
    });
    it("Register Password Required", () => {
        Register.registerPasswordRequired();
    });
    it("Register Term Required", () => {
        Register.registerTermRequired();
    });
});
