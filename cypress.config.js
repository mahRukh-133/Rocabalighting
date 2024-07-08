const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  viewportWidth: 1400,
  viewportHeight: 1200,
 
  pageLoadTimeout: 40000,
  defaultCommandTimeout: 40000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
  },
});