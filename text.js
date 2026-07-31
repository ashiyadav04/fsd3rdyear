const accountId=144553;
let accountEmail="ashiyadav@gmail.com";
var accountPassword="123450";
accountCity="Uttar Pradesh";
//const variable means once you declared any value youo can not change it 
//accountId=2;//not allowed
console.log(accountId);
console.log(accountPassword);
console.log(accountCity);
console.log(accountEmail);
accountEmail="ashiy@gmail.com";
accountPassword="123";
accountCity="Jaipur";
// console.log(accountId);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountEmail);
//Not writing again and agin we can simply use
console.table([accountId,accountPassword,accountEmail,accountCity]);
//why we don't use var because in var there is a problem of scope thats why now we use let only 
const accountState;
console.log(accountState);
/*
if we define a value and not assign it any 
value then js understand it as undefined 
ex:
let a;
let b;


if use const then it give you syntax error
const a;

*/

