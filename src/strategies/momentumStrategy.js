class MomentumStrategy {
    analyze(indicators) {
        // RSI > 50 and Price > EMA200 indicates upward momentum
        const isBullish = indicators.rsi > 50 && indicators.isAboveEMA;
        const confidence = isBullish ? 0.7 : 0.3;
        
        return { 
            signal: isBullish ? 'BUY' : 'HOLD', 
            confidence,
            strategy: 'Momentum'
        };
    }
}
module.exports = new MomentumStrategy();
