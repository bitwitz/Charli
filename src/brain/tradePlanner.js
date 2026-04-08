class TradePlanner {
    plan(symbol, decision, currentPrice) {
        return {
            symbol,
            entry: currentPrice,
            tp: decision.tp,
            sl: decision.sl,
            size: 0.01, // Default size, managed by RiskController
            timestamp: Date.now()
        };
    }
}
module.exports = new TradePlanner();
