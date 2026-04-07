import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// BDD config cho các test cần auth (SauceDemo)
const bddConfigAuth = defineBddConfig({
  features: 'features/{login,details}.feature',
  steps: 'steps/*.ts',
  outputDir: '.tests-bdd/auth',
});

// BDD config cho các test không cần auth (Milwaukee, v.v.)
const bddConfigNoAuth = defineBddConfig({
  features: 'features/product.feature',
  steps: 'steps/*.ts',
  outputDir: '.tests-bdd/no-auth',
});

export default defineConfig({
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 500,
      threshold: 0.9,
      animations: 'disabled',
    },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [['html', { open: 'on-failure' }], ['line'], ['allure-playwright', {outputFolder: 'allure-results'}]],
  use: {
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720},
  },
  projects: [
    // --- Setup auth ---
    {
      name: 'setup',
      testDir: './tests',
      testMatch: /auth\.setup\.ts/,
    },

    // --- Tests cần login (SauceDemo) ---
    {
      name: 'chromium-auth',
      testDir: '.tests-bdd/auth',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },

    // --- Tests KHÔNG cần login (Milwaukee) ---
    {
      name: 'chromium-no-auth',
      testDir: '.tests-bdd/no-auth',
      use: {
        ...devices['Desktop Chrome'],
      },
      // Không có dependencies: ['setup']
    },
  ],
});