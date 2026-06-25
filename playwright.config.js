require('dotenv').config();  // ✅ MUST be first

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 30000,

    retries: 1,

    use: {
        browserName: 'chromium',
        headless: false,

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