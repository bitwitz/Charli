const logger = require('../services/logger');
class OrderTracker {
    async track(orderId) {
        logger.info(`Monitoring Order ID: ${orderId}`);
        // Logic to poll Binance for fill status
    }
}
module.exports = new OrderTracker();
