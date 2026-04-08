class PerformanceStats {
    constructor() {
        this.totalTrades = 0;
        this.netProfitUSDT = 0;
    }
    addTrade(profit) {
        this.totalTrades++;
        this.netProfitUSDT += profit;
    }
}
module.exports = new PerformanceStats();
