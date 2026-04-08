class ReasoningEngine {
    constructor(regimeDetector, confidenceScorer) {
        this.regimeDetector = regimeDetector;
        this.confidenceScorer = confidenceScorer;
    }

    async analyze(symbol, indicators, sentiment) {
        const currentRegime = this.regimeDetector.detect(indicators);
        const finalConfidence = this.confidenceScorer.calculate(
            sentiment.confidence || 0.5, 
            indicators.rsi > 50 ? 0.6 : 0.4, 
            currentRegime
        );

        return {
            symbol,
            regime: currentRegime,
            confidence: finalConfidence,
            shouldTrade: finalConfidence > 0.75 && currentRegime !== 'HIGH_VOLATILITY'
        };
    }
}
module.exports = ReasoningEngine;
