import Read from "../support/page_object/read";

describe("Todolist Website | Read", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Read Success", () => {
        Read.readSuccess();
    });
});
