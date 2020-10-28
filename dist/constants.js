"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.permissions = void 0;
const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'getProducts': {
        all: ['trainer'],
        read: ['trainee',],
        write: ['trainer'],
        delete: ['head-trainer'],
    }
};
exports.permissions = permissions;
const users = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    }, {
        traineeEmail: 'trainee2@successive.tech',
        reviewerEmail: 'reviewer2@successive.tech'
    }, {
        traineeEmail: 'trainee3successive.tech',
        reviewerEmail: 'reviewer3successive.tech',
    }, {
        traineeEmail: 'trainee4@gmail.com',
        reviewerEmail: 'reviewer4@gmail.com'
    }, {
        traineeEmail: 'trainee5gmail.com',
        reviewerEmail: 'reviewer5@gmail.com'
    }];
exports.users = users;
//# sourceMappingURL=constants.js.map