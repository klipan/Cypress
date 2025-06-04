import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
    },
  },
});