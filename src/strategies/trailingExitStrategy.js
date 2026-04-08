class TrailingExitStrategy {
    // Moves the Stop Loss up as the price rises to lock in profits
    calculate(currentPrice, entryPrice, lastStopLoss, trailPercent = 0.01) {
        const newStopLoss = currentPrice * (1 - trailPercent);
        return Math.max(lastStopLoss, newStopLoss);
    }
}
module.exports = new TrailingExitStrategy();
