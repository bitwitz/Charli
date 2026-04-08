const axios = require('axios');

class DeepSeekClient {
    constructor() {
        this.apiKey = process.env.DEEPSEEK_API_KEY;
        this.apiUrl = 'https://api.deepseek.com/v1/chat/completions'; 
    }

    async generateTradePlan(symbol, marketData, sentiment) {
        const prompt = `Symbol: ${symbol}
        Price: ${marketData.price}
        RSI: ${marketData.rsi}
        Sentiment Score: ${sentiment.score} (${sentiment.mood})
        
        Task: Provide a trade decision. 
        Target profit must cover 1% Indian TDS and exchange fees.
        Output JSON: { "decision": "BUY|SELL|HOLD", "confidence": 0-1, "tp": number, "sl": number, "explanation": "string" }`;

        const response = await axios.post(this.apiUrl, {
            model: "deepseek-reasoner",
            messages: [{ role: "user", content: prompt }]
        }, {
            headers: { 'Authorization': `Bearer ${this.apiKey}` }
        });

        return JSON.parse(response.data.choices[0].message.content);
    }
}

module.exports = new DeepSeekClient();
