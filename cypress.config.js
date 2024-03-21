const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        env: {
            BASE_URL: "http://localhost:5173",
            email_login: "sventh700@gmail.com",
            password_login: "Sventh123",
            name_register: "sventh7",
            email_register: "sventh700@gmail.com",
            password_register: "Sventh123",
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
    },
});
