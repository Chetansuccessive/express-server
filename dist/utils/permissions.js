"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function hasPermission(moduleName, role, permissionType) {
    const modulePermission = constants_1.permissions[moduleName];
    if (!modulePermission) {
        return false;
    }
    if (modulePermission.all.includes(role)) {
        return true;
    }
    else {
        return modulePermission[permissionType] && modulePermission[permissionType].includes(role);
    }
}
exports.default = hasPermission;
//# sourceMappingURL=permissions.js.map