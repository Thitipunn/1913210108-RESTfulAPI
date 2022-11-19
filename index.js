//const datefns = require('date-fns');

//console.log(datefns.format(new Date(),'MM/dd/yyyy'))

//console.log("Hello World!");

// let firstName = "Thitipun";
// let age = 21;

// //console.log(firstName+age);

// let info = `
//  my name is ${firstName};
//  my ages is ${age};
// `

// console.log(info);

const user = {
    name:"Thitipun", 
    salary:10000000,
    address:{
        povince:"bangkok",
        postCode:10250
    }
};

const {name,salary,address:{povince,postCode}} = user;

const showData = () => `${user.name}`

//console.log(showData());

const showData2 = () => {
    let info = "My name is"
    return `${info} ${user.name}`
}

// console.log(showData2());

const sumNumber = (a,b) => a+b;

// console.log(sumNumber(9,1));

console.log(postCode);
