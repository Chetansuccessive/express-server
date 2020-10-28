"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const config_1 = require("./config");
console.log('Config is', config_1.config);
const server = new server_1.default({ PORT: 9000 });
server.bootstrap().run();
//# sourceMappingURL=index.js.map