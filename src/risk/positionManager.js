class PositionManager {
    constructor() { this.positions = new Map(); }
    add(symbol, data) { this.positions.set(symbol, data); }
    remove(symbol) { this.positions.delete(symbol); }
    get(symbol) { return this.positions.get(symbol); }
}
module.exports = new PositionManager();
