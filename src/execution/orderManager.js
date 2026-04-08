const exchange = require('./exchangeAdapter');
const logger = require('../services/logger');

class OrderManager {
    async executeSmartOrder(symbol, side, amount, price) {
        // Slippage Guard: Ensure we aren't buying too high
        const slippageBuffer = side === 'buy' ? 1.0005 : 0.9995;
        const adjustedPrice = price * slippageBuffer;
        
        return await exchange.placeLimitOrder(symbol, side, amount, adjustedPrice);
    }
}
module.exports = new OrderManager();
