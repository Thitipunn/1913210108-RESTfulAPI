const users = [
{
name:"Thitipun",
nickname:"Be",
hobby:"Reading Novel",
address:"Onnut 17",
province:{
    province:"Bangkok",
    postcode:10250
}},
{
name:"Chatinun",
nickname:"Max",
hobby:"Drinking Alcohol",
address:"Bin",
province:{
    province:"Bangkok",
    postcode:10251
}},
{
name:"Sumeth",
nickname:"Touch",
hobby:"Sleeping",
address:"Pattanakarn",
province:{
    province:"Bangkok",
    postcode:10254
}}]

for(const u of users){
    console.log(`
My nickname is ${u.nickname}, My hobby is ${u.hobby}
and my postcode is ${u.province.postcode}`);
}