const telegram = require('../notifications/telegramBot');
const logger = require('../services/logger');

class AlertManager {
    notify(severity, message) {
        if (severity === 'CRITICAL') {
            telegram.sendUpdate(`🚨 **CRITICAL ALERT**\n${message}`);
            logger.error(`CRITICAL: ${message}`);
        } else if (severity === 'INFO') {
            logger.info(message);
        }
    }
}
module.exports = new AlertManager();
