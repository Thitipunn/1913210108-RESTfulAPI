// let drinks = ["Water","Milk","Tea"]

const { max } = require("date-fns");

// for(const d of drinks){
//     console.log(d);
// }

const users = [{name:"Max", age:21},
{name:"Touch", age:22},
{name:"Be", age:21}]
for(const u of users){
    console.log(`The name is ${u.name}
age is ${u.age}`);
}