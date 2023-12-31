const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  // defaultCommandTimeout: 5000,
  // viewportWidth: 1000,
  // viewportHeight: 600,
  // // Viewport settings overridden for component tests
  // component: {
  //   viewportWidth: 500,
  //   viewportHeight: 500,
  // },

  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    // parseSpecialCharSequences: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
