class PromptBuilder {
    buildSentimentPrompt(news) {
        return `Analyze these crypto headlines for immediate market impact. Score from -1 to 1.
        Headlines: ${news}`;
    }

    buildReasoningPrompt(symbol, data, sentiment) {
        return `As a lead quant for a high-frequency fund, analyze ${symbol}.
        Market Data: ${JSON.stringify(data)}
        Sentiment: ${sentiment}
        Requirement: Target must exceed 2.2% to cover Indian TDS (1%) and taxes.
        Output: JSON with decision, confidence, tp, sl, and logic.`;
    }
}
module.exports = new PromptBuilder();
