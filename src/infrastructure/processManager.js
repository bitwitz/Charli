const { Worker } = require('worker_threads');
const logger = require('../services/logger');

class ProcessManager {
    constructor() {
        this.workers = new Map();
    }

    spawnAgent(symbol, sharedBuffer) {
        logger.info(`Spawning autonomous agent for ${symbol}...`);
        
        // In production, each symbol gets its own logic thread
        const worker = new Worker('./src/app.js', {
            workerData: { symbol, sharedBuffer }
        });

        worker.on('error', (err) => logger.error(`Worker Error [${symbol}]:`, err));
        worker.on('exit', (code) => {
            if (code !== 0) logger.warn(`Worker [${symbol}] stopped with exit code ${code}`);
        });

        this.workers.set(symbol, worker);
    }
}

module.exports = new ProcessManager();
