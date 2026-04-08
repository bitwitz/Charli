const exchange = require('../execution/exchangeAdapter');
class MarketCollector {
    async fetchHistory(symbol, timeframe = '5m', limit = 100) {
        // Fetches historical candles to "prime" the indicator engine
        return await exchange.client.fetchOHLCV(symbol, timeframe, undefined, limit);
    }
}
module.exports = new MarketCollector();
