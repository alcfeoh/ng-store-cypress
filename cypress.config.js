const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'jvwuev',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://store.angulartraining.com',
    defaultCommandTimeout: 5000,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalStudio: true,
    experimentalPromptCommand: true
  },
})
