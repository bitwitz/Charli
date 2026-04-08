module.exports = {
    sleep: (ms) => new Promise(res => setTimeout(res, ms)),
    formatCurrency: (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(val),
    roundToTick: (num, tick) => Math.floor(num / tick) * tick
};
