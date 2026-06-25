require('dotenv').config();  // ✅ MUST be first

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 30000,

    retries: 1,

    use: {
        browserName: 'chromium',
        headless: process.env.CI === 'true',
        launchOptions: {
            args: process.env.CI === 'true' ? ['--no-sandbox', '--disable-setuid-sandbox'] : []
        },

        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        video: 'retain-on-failure'
    },

    reporter: [
        ['list'],
        ['html'],
        ['allure-playwright']   // ✅ Allure enabled
    ]
});