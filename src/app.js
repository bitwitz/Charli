const logger = require('./services/logger');
const aiController = require('./brain/aiController');
const riskController = require('./risk/riskController');
const exchange = require('./execution/exchangeAdapter');
const marketState = require('./data/marketState');

class CharliApp {
    constructor(symbols) {
        this.symbols = symbols;
    }

    async runCycle() {
        for (let i = 0; i < this.symbols.length; i++) {
            const symbol = this.symbols[i];
            const currentPrice = marketState.data[i * 5];

            if (!currentPrice) continue;

            // 1. Get AI Consensus (Gemini + DeepSeek)
            // Note: In reality, you'd pass news/indicators here
            const decision = await aiController.getConsensus(symbol, { price: currentPrice }, "Market is stable");

            if (decision.decision === 'BUY' && decision.confidence > 0.8) {
                // 2. Risk Audit (India Tax Check)
                const audit = riskController.auditTrade(decision, currentPrice);
                
                if (audit.approved) {
                    await exchange.placeLimitOrder(symbol, 'buy', 0.001, currentPrice);
                    logger.info(`Charli bought ${symbol} based on AI Consensus.`);
                } else {
                    logger.warn(`Trade rejected by Risk Manager: ${audit.reason}`);
                }
            }
        }
    }
}

module.exports = CharliApp;
