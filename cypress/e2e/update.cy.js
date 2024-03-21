import Update from "../support/page_object/update";

describe("Todolist Website | Update", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Update Success", () => {
        Update.updateSuccess();
    });
    it("Update Cancel", () => {
        Update.updateCancel();
    });
});
