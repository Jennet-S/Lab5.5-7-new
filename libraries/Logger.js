class Logger {
    constructor(id) {
        this.id = id;
    }

    log(message) {
        console.log(`[Logger :${this.id}]: ${message}`);
    }
}

module.exports = Logger;