"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function diamond(noOfRow) {
    console.log('Printing diamond for ', noOfRow, ' rows : ');
    for (let i = 1; i <= noOfRow; i++) {
        for (let s = noOfRow - 1; s >= i; s--) {
            process.stdout.write(' ');
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write('* ');
        }
        console.log();
    }
    for (let i = 1; i <= noOfRow - 1; i++) {
        for (let s = 1; s <= i; s++) {
            process.stdout.write(' ');
        }
        for (let j = i; j <= noOfRow - 1; j++) {
            process.stdout.write('* ');
        }
        console.log();
    }
}
exports.default = diamond;
// noOfRow = process.argv[2];
// console.log(noOfRows);
// diamond(noOfRow)
//# sourceMappingURL=diamond.js.map