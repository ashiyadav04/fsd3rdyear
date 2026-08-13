//singleton
//Object.create

//object literals


const sym= Symbol("mykey1")
const JsUser={
    name:"Ashi",
   [sym]:"mykey1",
    age:18,
    email:"ashi@goole.com",
    isLoggedin:false,
    lastLoginDays:["Monday","Saturday"]
}


console.log(JsUser.age)
console.log(JsUser.lastLoginDays)
console.log(JsUser.name)
console.log(JsUser["name"])


//Interview question :use symbol dataypes for key
console.log(JsUser["sym"])
console.log(typeof JsUser["sym"])


//if you want to change value you can it by doing this 
JsUser.name="Ashi yadav";


//now you want that no one can change the value 
// Object.freeze(JsUser)
// JsUser.name="Ashi";
// console.log(JsUser)


JsUser.greeting=function(){
    console.log("Hello JS users")
}

console.log(JsUser.greeting())

JsUser.greeting1=function(){
    console.log(`Hello JS users,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting1())

JsUser.fun=function()
{
    console.log("My name is ashi yadav,i am inside function ")
}
console.log(JsUser.fun())


console.log(JsUser)

