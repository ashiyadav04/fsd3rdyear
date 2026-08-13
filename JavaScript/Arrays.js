//arrays


const myArr=[1,2,3,4,5]
console.log(myArr)
const myArr1=[1,2,3,4,5,6,true,'ashi']
console.log(myArr1)
const myarr2=new Array(1,2,3,4,5)
console.log(myarr2)


//Array methods

myArr.push(6)  
console.log(myArr)

myArr.push(7)

console.log(myArr)

myArr.pop()

console.log(myArr)
myArr.unshift("ashi")
console.log(myArr)

myArr.shift()
console.log(myArr)

myArr.unshift()
console.log(myArr)  

console.log(myArr.indexOf(3)) //2
console.log(myArr.indexOf(8))  //-1

console.log(myArr.includes(9))  //false
console.log(myArr.includes(5))  //true

const newArr=myArr.join()

console.log(myArr)
console.log(newArr)

console.log(typeof myArr) //object 
console.log(typeof newArr) //string


// slice ,splice 

console.log("A",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("c",myArr)
