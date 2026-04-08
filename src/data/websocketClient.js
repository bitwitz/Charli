const WebSocket = require('ws');
const logger = require('../services/logger');
const marketState = require('./marketState');

class BinanceWS {
    constructor(symbols) {
        this.symbols = symbols;
        this.baseUrl = "wss://stream.binance.com:9443/ws";
        this.streams = symbols.map(s => `${s.toLowerCase()}@kline_1m`).join('/');
    }

    connect() {
        this.ws = new WebSocket(`${this.baseUrl}/${this.streams}`);

        this.ws.on('open', () => logger.info("Charli's eyes are open: WebSocket Connected."));
        
        this.ws.on('message', (data) => {
            const msg = JSON.parse(data);
            const symbolIndex = this.symbols.indexOf(msg.s);
            if (symbolIndex !== -1) {
                // Update Shared Memory with Price
                marketState.update(symbolIndex, parseFloat(msg.k.c));
            }
        });

        this.ws.on('error', (err) => logger.error("WebSocket Error:", err));
        this.ws.on('close', () => {
            logger.warn("WebSocket Closed. Reconnecting in 5s...");
            setTimeout(() => this.connect(), 5000);
        });
    }
}

module.exports = BinanceWS;
