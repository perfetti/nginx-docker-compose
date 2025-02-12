const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:8089",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Increase timeout for requests since we're dealing with a development environment
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
  },
  // Disable video recording to save space
  video: false,
  // Configure viewport to match our application
  viewportWidth: 1280,
  viewportHeight: 720,
});
