const fs = require('fs');
const path = require('path');

const screenshotDir = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
}

async function takeScreenshot(page, name) {
    await page.screenshot({
        path: path.join(screenshotDir, `${name}.png`),
        fullPage: true
    });
}

module.exports = { takeScreenshot };