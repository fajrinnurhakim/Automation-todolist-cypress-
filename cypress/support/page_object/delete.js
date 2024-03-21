import Login from "./login";

class Delete {
    deleteSuccess() {
        Login.loginSuccess();
        cy.get("button").contains("Delete").eq(0).click();
        cy.get(".swal2-container").should("be.visible");
        cy.wait(500);
        cy.get("button").contains("OK").click();
    }
}

export default new Delete();
