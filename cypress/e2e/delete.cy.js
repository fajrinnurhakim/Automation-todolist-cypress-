import Delete from "../support/page_object/delete";

describe("Todolist Website | Delete", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Delete Success", () => {
        Delete.deleteSuccess();
    });
});
