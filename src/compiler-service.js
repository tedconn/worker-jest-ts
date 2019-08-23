const { default: JestWorker } = require('jest-worker');

async function compile() {
    const worker = new JestWorker(require.resolve('./compiler', {
        numWorkers: 2,
        enableWorkerThreads: true,
    }));
    
    const message = await worker.compile();
    await worker.end();
    return message;
}

module.exports = { compile };