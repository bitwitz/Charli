const { RSI, MACD, EMA } = require('technicalindicators');

class IndicatorEngine {
    calculate(candles) {
        const prices = candles.map(c => c.close);
        
        const rsi = RSI.calculate({ values: prices, period: 14 });
        const macd = MACD.calculate({
            values: prices,
            fastPeriod: 12,
            slowPeriod: 26,
            signalPeriod: 9,
            SimpleMAOscillator: false,
            SimpleMASignal: false
        });
        const ema200 = EMA.calculate({ values: prices, period: 200 });

        return {
            rsi: rsi[rsi.length - 1],
            macd: macd[macd.length - 1],
            ema200: ema200[ema200.length - 1],
            isAboveEMA: prices[prices.length - 1] > ema200[ema200.length - 1]
        };
    }
}

module.exports = new IndicatorEngine();
