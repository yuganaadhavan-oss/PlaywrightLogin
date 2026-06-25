const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const users = require('../testData/users.json');
const logger = require('../utils/logger');
const { takeScreenshot } = require('../utils/screenshot');

test('Enterprise Login Test', async ({ page }) => {

    logger.info("Test Started");

    const loginPage = new LoginPage(page);

    await loginPage.open(process.env.URL);

    logger.info("Opened Application");

    await loginPage.login(users.username, users.password);

    logger.info("Login performed");

    await expect(page).toHaveURL(/inventory/);

    await takeScreenshot(page, "login_success");

    logger.info("Test Completed");
});