import diamond  from './patterns/diamond';
import equilateral  from './patterns/equilateral';
import { validateUser } from './utils/validation';
import  hasPermission from './utils/permissions';
import { users } from './constants';

diamond(5);
equilateral(5);
console.log();
console.log( 'Now testing for valid/invalid user: ' );
validateUser(users);
console.log();
console.log( 'moduleName: getProducts, role: head-trainer, permissionType: delete ', hasPermission( 'getProducts', 'head-trainer', 'delete' ) );
console.log( 'moduleName: getUsers, role: trainer, permissionType: delete ', hasPermission( 'getUsers', 'trainer', 'delete' ) );
console.log( 'moduleName: getProducts, role: trainee, permissionType: read ', hasPermission( 'getProducts', 'trainee' , 'read' ) );
console.log( 'moduleName: getUsers, role: trainee, permissionType: write ', hasPermission( 'getUsers', 'trainee', 'write' ) );
console.log( 'moduleName: getUsers, role: trainer, permissionType: read ', hasPermission( 'getUsers', 'trainer', 'read' ) );
 // hasPermission(permissions);
