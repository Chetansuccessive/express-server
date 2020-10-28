"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const domain = email.split('@')[1];
    return reg.test(email) && (domain === 'successive.tech');
}
exports.default = validateEmail;
//# sourceMappingURL=helpers.js.map