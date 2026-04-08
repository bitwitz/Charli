const logger = require('../services/logger');
class UptimeMonitor {
    start() {
        setInterval(() => {
            logger.info("Charli Heartbeat: System Operational.");
        }, 3600000); // Hourly heartbeat
    }
}
module.exports = new UptimeMonitor();
