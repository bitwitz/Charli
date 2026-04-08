class ResponseParser {
    parse(response) {
        try {
            // Clean markdown blocks if AI includes them
            const cleanJson = response.replace(/```json|\`\`\`/g, '').trim();
            return JSON.parse(cleanJson);
        } catch (e) {
            return { decision: 'HOLD', confidence: 0, reason: 'Parse Error' };
        }
    }
}
module.exports = new ResponseParser();
