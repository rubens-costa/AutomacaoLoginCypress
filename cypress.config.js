const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '83ykds',
  reporter: "mochawesome",
  reporterOptions: {

    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss",
  },
  e2e: {
    // experimentalSessionAndOrigin: true,
    baseUrl: 'http://bugbank.netlify.app/',
    viewportWidth: 1280,
    viewportHeight: 720,
    chromeWebSecurity: false,
    defaultCommandTimeout: 700000,
    responseTimeout: 700000,
    requestTimeout: 700000,
    pageLoadTimeout: 700000,
    scripts: {
      "cy:run": "cypress run"
    },
    numTestsKeptInMemory: 0,
    // numTestsKeptInMemory: 0,
    retries: {
      runMode: 2,
      openMode: 2,
    },
  },
})


