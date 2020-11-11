export default function equilateral ( noOfRow: number ): void {
 console.log ('Printing equilateral triangle for ', noOfRow, ' rows : ');
  for ( let i: number = 1; i <= noOfRow; i++ ) {
    for ( let s: number = noOfRow - 1; s >= i; s-- ) {
        process.stdout.write ( ' ' );
       }
    for ( let j: number = 1; j <= i; j++ ) {
        process.stdout.write ( '* ' );
       }
   console.log ();
  }
}
// noOfRow = process.argv[2];
// equilateral(noOfRow);
