class SlippageController {
    calculateMaxSlippage(volatility) {
        // High volatility = wider slippage allowed to ensure fill
        return volatility > 0.02 ? 0.002 : 0.0005; // 0.2% vs 0.05%
    }

    isPriceAcceptable(current, target, side) {
        const diff = (current - target) / target;
        return side === 'buy' ? diff < 0.001 : diff > -0.001;
    }
}
module.exports = new SlippageController();
