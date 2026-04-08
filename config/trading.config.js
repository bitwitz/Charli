module.exports = {
    symbols: (process.env.TRADING_SYMBOLS || 'BTCUSDT,ETHUSDT').split(','),
    baseCurrency: 'USDT',
    timeframe: '5m',
    maxPositions: 10,
    leverage: 1 // Keep it 1 for spot trading
};
