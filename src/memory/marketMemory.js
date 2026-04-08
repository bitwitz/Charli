class MarketMemory {
    constructor() {
        this.history = new Map(); // Stores rolling window of candles
    }

    push(symbol, candle) {
        if (!this.history.has(symbol)) this.history.set(symbol, []);
        const logs = this.history.get(symbol);
        logs.push(candle);
        if (logs.length > 100) logs.shift(); // Keep only last 100
    }

    getHistory(symbol) {
        return this.history.get(symbol) || [];
    }
}
module.exports = new MarketMemory();
