import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'components/**/*.cy.{js,jsx,ts,tsx}',
    ],
  },
})
