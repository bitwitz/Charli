module.exports = {
    getTimestamp: () => Date.now(),
    isMarketOpen: () => true, // Crypto never sleeps
    formatDate: (date) => new Date(date).toLocaleString('en-IN')
};
