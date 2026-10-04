import { defineConfig, devices } from '@playwright/test'
import { config } from './config/envConfig.js'

export default defineConfig({

    // Where Playwright should look for test files
    testDir: './tests',

    // Run tests in parallel
    fullyParallel: true,

    // Prevent accidentally committing test.only
    forbidOnly: !!process.env.CI,

    // Retry failed tests in CI
    retries: process.env.CI ? 2 : 0,

    // Number of parallel workers
    workers: process.env.CI ? 1 : undefined,

    // Test execution timeout
    timeout: 30 * 1000,

    // Assertion timeout
    expect: {
        timeout: 5 * 1000
    },

    // Reporting
    reporter: [
        ['html', { outputFolder: 'reports/html-report', open: 'never' }]
    ],

    // Shared settings for all tests
    use: {

        // Application URL
        baseURL: config.baseURL,

        // Capture screenshot only when test fails
        screenshot: 'only-on-failure',

        // Record video only when test fails
        video: 'retain-on-failure',

        // Capture trace when test is retried
        trace: 'on-first-retry',

        // Browser context settings
        headless: true,

        // Ignore HTTPS certificate errors
        ignoreHTTPSErrors: true
    },

    // Browser projects
    projects: [
        {
            name: 'setup',
            testDir: './setup',
            testMatch: /auth\.setup\.js/
        },

        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                storageState: 'auth/user.json'
            },
            dependencies: ['setup']
        }
    ]
})