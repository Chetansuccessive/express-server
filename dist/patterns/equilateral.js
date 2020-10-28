"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function equilateral(noOfRow) {
    console.log('Printing equilateral triangle for ', noOfRow, ' rows : ');
    for (let i = 1; i <= noOfRow; i++) {
        for (let s = noOfRow - 1; s >= i; s--) {
            process.stdout.write(' ');
        }
        for (let j = 1; j <= i; j++) {
            process.stdout.write('* ');
        }
        console.log();
    }
}
exports.default = equilateral;
// noOfRow = process.argv[2];
// equilateral(noOfRow);
//# sourceMappingURL=equilateral.js.map