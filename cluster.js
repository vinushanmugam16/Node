const cluster = require("cluster");
const total_cpus = require("os").cpus().length;

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);

    // Fork child processes(workers) 
    for (let i = 0; i < total_cpus; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker process ${worker.process.pid} died`);
    });
}
else {
    console.log(`Worker process ${process.pid} started running`);
}
