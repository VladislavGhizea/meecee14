import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: "cypress/fixtures",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
