export default function diamond( noOfRow: number ): void {
 console.log (  'Printing diamond for ', noOfRow, ' rows : ' );
    for ( let i: number = 1; i <= noOfRow; i++ ) {
       for ( let s: number = noOfRow - 1; s >= i; s-- ) {
          process.stdout.write ( ' ' );
       }
       for ( let j: number = 1 ; j <= i; j++ ) {
          process.stdout.write ( '* ' );
       }
       console.log ();
    }
    for ( let i: number = 1; i <= noOfRow - 1; i++ ) {
     for  ( let s: number = 1; s <= i; s++ ) {
         process.stdout.write ( ' ' );
        }
     for ( let j: number = i; j <= noOfRow - 1; j++ ) {
         process.stdout.write ( '* ' );
        }
     console.log ();
    }
}
// noOfRow = process.argv[2];
// console.log(noOfRows);
// diamond(noOfRow)