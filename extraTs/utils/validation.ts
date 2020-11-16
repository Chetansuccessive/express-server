import  validateEmail  from './helpers.js';
export function validateUser ( users: IUsers[] ): void {
 const vUser = [];
 const ivUser = [];
 users.forEach(({ traineeEmail, reviewerEmail }) => {
    if ( validateEmail ( reviewerEmail ) && validateEmail ( traineeEmail ) ) {
        vUser.push({ traineeEmail, reviewerEmail });
    }
    else {
        ivUser.push({ traineeEmail, reviewerEmail });
    }
 });
    console.log();
    console.log('Valid Users Count : ' , vUser.length);
    console.log('Invalid Users Count : ', ivUser.length);
    console.log();
    console.log('Valid Users : ', vUser);
    console.log();
    console.log('Invalid Users : ', ivUser);
}
// validateUser(users);
