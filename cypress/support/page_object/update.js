import Login from "./login";
const data = require("../../fixtures/update-data.json");

class Update {
    updateSuccess() {
        Login.loginSuccess();
        cy.get("button").contains("Update").eq(0).click();
        cy.get("#updatedTitle").clear().type(data["title"]);
        cy.get("#updatedTanggal").clear().type(data["tanggal"]);
        cy.get("#updatedStartTime").clear().type(data["start_time"]);
        cy.get("#updatedEndTime").clear().type(data["end_time"]);
        cy.get("#status").select(data["status"]);
        cy.get("button").contains("Update Todo").click();
        cy.get(".swal2-container").should("be.visible");
        cy.wait(500);
        cy.get("button").contains("OK").click();
    }
    updateCancel() {
        Login.loginSuccess();
        cy.get("button").contains("Update").eq(0).click();
        cy.get("button").contains("Cancel").click();
    }
}

export default new Update();
