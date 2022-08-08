const { defineConfig } = require('cypress')

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,

  "retries": {
    "runMode": 2,
    "openMode": 1,
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  reporterEnabled: 'spec, mocha-junit-reporter',
  mochaJunitReporterReporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml'
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    baseUrl: "http://localhost:4200/",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*']
  },
  "env": {
    "username": "yedekmehmettarhan@gmail.com",
    "password": "srntrhn.2134",
    "apiUrl": "https://api.realworld.io/"
  }
})