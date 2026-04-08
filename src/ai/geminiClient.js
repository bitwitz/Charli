const { GoogleGenerativeAI } = require("@google/generative-ai");

class GeminiClient {
    constructor() {
        this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    }

    async analyzeSentiment(newsHeadlines) {
        const prompt = `Analyze these crypto news headlines and provide a sentiment score between -1 (Extreme FUD) and 1 (Extreme Hype). 
        Output ONLY a JSON object: { "score": number, "mood": "string", "reason": "string" }.
        
        Headlines: ${newsHeadlines}`;

        const result = await this.model.generateContent(prompt);
        const response = await result.response;
        return JSON.parse(response.text());
    }
}

module.exports = new GeminiClient();
