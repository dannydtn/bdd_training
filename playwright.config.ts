import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const bddConfig = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.ts',
  outputDir: '.tests-bdd',
});

export default defineConfig({
  ...bddConfig,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    screenshot: 'on',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testDir: './tests',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      testDir: '.tests-bdd',
      use: {
        ...devices['Desktop Chrome'],
        slowMo: 3000,
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});
