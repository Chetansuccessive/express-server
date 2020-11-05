import { Diamond  } from './Patterns'
import { Triangle } from './Patterns'
console.log("Diamond of 5 rows-");
console.log("\n")
Diamond(5);
console.log("\n")
console.log("Diamond of 10 rows-");
console.log("\n")
Diamond(10);
console.log("\n")
console.log("Triangle of 5 rows-");
console.log("\n")
Triangle(5);
console.log("\n")
console.log("Triangle of 10 rows-");
console.log("\n")
Triangle(10);
console.log("\n")

import { hasPermission } from './Utils'
console.log("hasPermission function will be called now");
console.log("\n")
console.log("module: getUsers,role:trainer,permission:delete" , hasPermission('getUsers','trainer','delete'));
console.log("\n")
console.log("module: getUsers,role:head-trainer,permission:all" , hasPermission('getUsers','head-trainer','all'));
console.log("\n")
console.log("module: getUsers,role:head-trainee,permission:read" , hasPermission('getUsers','trainee','read'))
console.log("\n")

let users =
[
    {
         traineeEmail: "abhishek.khurana@successive.tech",
         reviewerEmail: "preet.saxena@successive.tech",
    } ,
    {
        traineeEmail:"abhishek@gmail.com",
        reviewerEmail: "xyz@gmail.com",
    },
    {
        traineeEmail : "abc@yahoo.com",
        reviewerEmail : "xyz@hotmail.com",
    }
 ]
console.log ("now validUser function will be called")
console.log("\n")
import {ValidateUser} from './Utils';
ValidateUser(users);

