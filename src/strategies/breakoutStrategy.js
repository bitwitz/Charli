class BreakoutStrategy {
    check(price, high24h) {
        const isBreakingOut = price > high24h;
        return { signal: isBreakingOut ? 'BUY' : 'HOLD', confidence: isBreakingOut ? 0.8 : 0 };
    }
}
module.exports = new BreakoutStrategy();
