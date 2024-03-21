import Login from "./login";
const data = require("../../fixtures/create-data.json");

class Create {
    createSuccess() {
        Login.loginSuccess();
        cy.get("ul>li>a").contains("Create").click();
        cy.url().should("include", "/create");
        cy.get("#title").type(data["title"]);
        cy.get("#tanggal").type(data["tanggal"]);
        cy.get("#start_time").type(data["start_time"]);
        cy.get("#end_time").type(data["end_time"]);
        cy.get("#status").select(data["status"]);
        cy.get("button[type='submit']").click();
        cy.get(".swal2-container").should("be.visible");
        cy.wait(500);
        cy.get("button").contains("OK").click();
    }
    createRequired() {
        Login.loginSuccess();
        cy.get("ul>li>a").contains("Create").click();
        cy.url().should("include", "/create");
        cy.get("button[type='submit']").click();
        cy.get("#title").should("have.attr", "required");
        cy.get("#tanggal").should("have.attr", "required");
        cy.get("#start_time").should("have.attr", "required");
        cy.get("#end_time").should("have.attr", "required");
        cy.get("#status").should("have.attr", "required");
    }
}

export default new Create();
