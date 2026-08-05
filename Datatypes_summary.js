// Primitive Datatypes
//7 types:String ,number,Boolean,null,undefined,symbol,BigInt

 

const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id)
console.log(anotherId)
console.log(typeof id)
console.log(typeof anotherId)
console.log(id==anotherId)

const bigNumber=34356789345678n 
console.log(typeof bigNumber)



//Referencetype or (Non Primitive)
//array,object,functions

let  hero=["shaktiman","naagraj","doga"]
let myobj={
    name:"Ashi",
    age:22,
}
console.log(hero)
console.log(typeof hero)
console.log(myobj)
console.log(typeof myobj)

const myfun=function(){
    console.log("Hello world");
}
console.log(typeof myfun);