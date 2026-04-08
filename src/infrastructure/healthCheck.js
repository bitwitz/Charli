const logger = require('../services/logger');

class HealthCheck {
    constructor() {
        this.startTime = Date.now();
    }
    
    getStatus() {
        const uptime = (Date.now() - this.startTime) / 1000;
        return {
            status: 'HEALTHY',
            uptime: `${Math.floor(uptime / 60)} minutes`,
            memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024 + ' MB'
        };
    }
}
module.exports = new HealthCheck();
