const { createClient } = require('@supabase/supabase-js');
const logger = require('../services/logger');

class TradeLogger {
    constructor() {
        this.supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    }

    async logTrade(tradeData) {
        try {
            const { data, error } = await this.supabase
                .from('trades')
                .insert([{
                    symbol: tradeData.symbol,
                    side: tradeData.side,
                    price: tradeData.price,
                    tds_paid: tradeData.price * 0.01,
                    tax_reserve: tradeData.profit * 0.30,
                    ai_reasoning: tradeData.reasoning,
                    timestamp: new Date()
                }]);
            
            if (error) throw error;
            logger.info("Trade successfully logged to Supabase Ledger.");
        } catch (err) {
            logger.error("Database Logging Failed:", err);
        }
    }
}

module.exports = new TradeLogger();
