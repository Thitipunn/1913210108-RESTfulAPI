const user = {
    name:"Thitipun",
    nickname:"Be",
    hobby:"Reading Novel",
    address:"Onnut 17",
    province:{
        province:"Bangkok",
        postcode:10250
    }
}

const showData = ({nickname,hobby,province:{postCode}}) => {
    return `My nickname is ${nickname}, My hobby is ${hobby}
and my postcode is ${postCode}`
}

console.log(showData(user));

