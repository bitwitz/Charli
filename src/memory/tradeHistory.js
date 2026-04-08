const fs = require('fs');
class TradeHistory {
    constructor() { this.path = './logs/trades.log'; }
    save(trade) {
        const entry = `[${new Date().toISOString()}] ${JSON.stringify(trade)}\n`;
        fs.appendFileSync(this.path, entry);
    }
}
module.exports = new TradeHistory();
