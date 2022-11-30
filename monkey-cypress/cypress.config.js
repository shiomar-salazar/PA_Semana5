const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: "http://localhost:2368/ghost/",
    videosFolder:"./results",
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: "./results",
    pageLoadTimeout:120000,
    defaultCommandTimeout:120000,
    "env":{
      "appName":"Ghost v5.18",
      "events":100,
      "delay":300,
      "seed":1234,
      "pctClicks":20,
      "pctScroll":0,
      "pctSelectors":20,
      "pctKeys":20,
      "pctSpKeys":20,
      "pctPgNav":20,
      "username": "s.salazarcastillo@uniandes.edu.co",
      "password": "123456789987654321"
  },
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
