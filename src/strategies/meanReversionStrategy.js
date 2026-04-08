class MeanReversionStrategy {
    check(rsi) {
        if (rsi < 30) return { signal: 'BUY', confidence: 0.7 };
        if (rsi > 70) return { signal: 'SELL', confidence: 0.7 };
        return { signal: 'HOLD', confidence: 0 };
    }
}
module.exports = new MeanReversionStrategy();
