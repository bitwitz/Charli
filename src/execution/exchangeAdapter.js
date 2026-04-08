const ccxt = require('ccxt');
const logger = require('../services/logger');

class ExchangeAdapter {
    constructor() {
        this.client = new ccxt.binance({
            apiKey: process.env.BINANCE_API_KEY,
            secret: process.env.BINANCE_API_SECRET,
            options: { 'adjustForTimeDifference': true }
        });
    }

    async placeLimitOrder(symbol, side, amount, price) {
        try {
            logger.info(`Executing ${side} order for ${symbol} at ${price}...`);
            // In Production, we use limit orders to save fees
            const order = await this.client.createLimitOrder(symbol, side, amount, price);
            return order;
        } catch (error) {
            logger.error("Order Execution Failed:", error);
            throw error;
        }
    }

    async getBalance(asset = 'USDT') {
        const balance = await this.client.fetchBalance();
        return balance.total[asset] || 0;
    }
}

module.exports = new ExchangeAdapter();
