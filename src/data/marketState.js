const { SharedArrayBuffer, Float64Array } = require('worker_threads');

class MarketState {
    constructor(symbolCount = 10) {
        // Price, RSI, Vol, High, Low (5 slots per symbol)
        this.buffer = new SharedArrayBuffer(symbolCount * 5 * 8);
        this.data = new Float64Array(this.buffer);
    }
    
    update(index, price) {
        this.data[index * 5] = price;
    }
}

module.exports = MarketState;
