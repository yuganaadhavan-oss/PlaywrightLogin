const winston = require('winston');
const fs = require('fs');
const path = require('path');

// Use an absolute log folder path so file writes work regardless of the current working directory.
const logDir = path.join(__dirname, '..', 'logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: path.join(logDir, 'test.log') })
    ]
});

module.exports = logger;