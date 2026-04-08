class RegimeDetector {
    detect(indicators) {
        if (indicators.rsi > 70) return 'OVERBOUGHT_DANGER';
        if (indicators.rsi < 30) return 'OVERSOLD_OPPORTUNITY';
        if (indicators.isAboveEMA) return 'BULL_TREND';
        return 'SIDEWAYS_CHOP';
    }
}
module.exports = new RegimeDetector();
