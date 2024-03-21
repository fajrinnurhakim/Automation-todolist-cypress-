import Create from "../support/page_object/create";

describe("Todolist Website | Create", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Create Success", () => {
        Create.createSuccess();
    });
    it("Create Required", () => {
        Create.createRequired();
    });
});
