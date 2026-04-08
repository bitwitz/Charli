class PerformanceTracker {
    constructor() { this.stats = { wins: 0, losses: 0, totalProfit: 0 }; }
    update(profit) {
        if (profit > 0) this.stats.wins++; else this.stats.losses++;
        this.stats.totalProfit += profit;
    }
}
module.exports = new PerformanceTracker();
