"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const helpers_js_1 = require("./helpers.js");
function validateUser(users) {
    const vUser = [];
    const ivUser = [];
    users.forEach(({ traineeEmail, reviewerEmail }) => {
        if (helpers_js_1.default(reviewerEmail) && helpers_js_1.default(traineeEmail)) {
            vUser.push({ traineeEmail, reviewerEmail });
        }
        else {
            ivUser.push({ traineeEmail, reviewerEmail });
        }
    });
    console.log();
    console.log('Valid Users Count : ', vUser.length);
    console.log('Invalid Users Count : ', ivUser.length);
    console.log();
    console.log('Valid Users : ', vUser);
    console.log();
    console.log('Invalid Users : ', ivUser);
}
exports.validateUser = validateUser;
// validateUser(users);
//# sourceMappingURL=validation.js.map