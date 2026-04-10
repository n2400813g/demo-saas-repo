import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  use: { headless: true, baseURL: process.env.BASE_URL },
});
