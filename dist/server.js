"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./libs/routes");
const router_1 = require("./router");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.initBodyParsar();
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
        const { app } = this;
        app.get('/health-check', (req, res, next) => {
            res.send('I am Ok');
        });
        app.use('/api', router_1.default);
        app.use(routes_1.notFoundHandler);
        app.use(routes_1.errorHandler);
        return this;
    }
    initBodyParsar() {
        const { app } = this;
        app.use(bodyParser.json({ type: 'application/*+json' }));
    }
    run() {
        const { app, config: { PORT } } = this;
        app.listen(PORT, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`App is running ${PORT}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map