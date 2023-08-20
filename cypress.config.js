import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'gddboj',
  e2e: {
    "viewportHeight":1080,
    "viewportWidth":1920,
    "defaultCommandTimeout" : 30000,
    "chromeWebSecurity": true,
    "baseUrl":'https://stageapp.sc.ge.com/integrations',
    "modifyObstructiveCode":false,
    "experimentalSourceRewriting": true,
    "reporter": 'mochawesome',
    "screenshotOnRunFailure": true,
    "screenshotsFolder": "cypress/reports/mochareports/assets",
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome, mocha-junit-reporter",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mocha",
        "charts": true,
      "reportPageTitle": "My Test Suite",
      "embeddedScreenshots": true,
      "inlineAssets": true
    },
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "cypress/reports/junit/results.[hash].xml"
    }
  },
  "video": false
    }
  })
