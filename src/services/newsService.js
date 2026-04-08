const axios = require('axios');
const logger = require('./logger');

class NewsService {
    async getLatestHeadlines(symbol) {
        try {
            // Using a public crypto news aggregator
            const response = await axios.get(`https://cryptopanic.com/api/v1/posts/?auth_token=${process.env.CRYPTO_PANIC_KEY}&currencies=${symbol}`);
            return response.data.results.slice(0, 5).map(post => post.title).join(' | ');
        } catch (error) {
            logger.error("News Fetch Failed:", error);
            return "No recent news available.";
        }
    }
}

module.exports = new NewsService();
