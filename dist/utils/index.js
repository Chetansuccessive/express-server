"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = exports.validateUser = void 0;
const validation_1 = require("./validation");
Object.defineProperty(exports, "validateUser", { enumerable: true, get: function () { return validation_1.validateUser; } });
const permissions_1 = require("./permissions");
exports.hasPermission = permissions_1.default;
//# sourceMappingURL=index.js.map