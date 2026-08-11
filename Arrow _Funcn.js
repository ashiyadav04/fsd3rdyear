// function sum(a,b)
// {
//     return a+b;
// }
//console.log("sum=",sum(10,20));
//using arrow function
const sum=(a,b)=>a+b;
console.log("sum=",sum(10,20));
const sum1=(a=0,b=0)=>a+b; //providing default value 
console.log("sum=",sum1(10));//only one parameter providing
//what is node ... its is single threaded using event queue by non blocking input output
//Synchronous ---
//Asynchronous --- if cpu is idle and execute another request than it is asynchronous



const user={
    username:"Ashi yadav",
    price:199,

    welcomeMessage: function()  {
        console.log(`${this.username} ,welcome to website`);
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()


console.log(this)





// function chai(){
//     let username="Ashi"
//     console.log(this.username) //undefined
// }

// chai()




// const chai=function(){
//     let username="Ashi"
//     console.log(this.username) // undefined
// }
// chai()


const chai=()  => {   //arrow function
let username="Ashi"
console.log(this.username) //undefined
}

chai()



//Arrow function ()=>


    const addTwo=(num1,num2)=>{
        return num1+num2
    }
    console.log(addTwo(5,10))





//implicit return 


// const addtwo=(num1,num2)=> num1+num2

const addtwo=(num1,num2)=> (num1+num2)
console.log(addtwo(5,10))



//using array

const myArray=[1,2,3,4,5]

//myArray.forEach()

