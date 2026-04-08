const os = require('os');
class SystemHealth {
    getMetrics() {
        return {
            cpuLoad: os.loadavg(),
            freeMem: os.freemem() / 1024 / 1024 + ' MB',
            nodeVersion: process.version
        };
    }
}
module.exports = new SystemHealth();
