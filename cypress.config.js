const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            BASE_URL: "https://localhost:5000/",
            email_login: "sventh700@gmail.com",
            password_login: "Sventh123",
            name_register: "sventh7",
            email_register: "sventh600@gmail.com",
            password_register: "Sventh123",
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
    },
});
