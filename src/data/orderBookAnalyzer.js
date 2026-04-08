class OrderBookAnalyzer {
    analyze(tickSize, bids, asks) {
        const spread = (asks[0][0] - bids[0][0]) / bids[0][0];
        const isLiquid = spread < 0.001; // Less than 0.1% spread
        return { spread, isLiquid };
    }
}
module.exports = new OrderBookAnalyzer();
