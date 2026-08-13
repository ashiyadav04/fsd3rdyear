//functions 

function sayMyName(){
    console.log("a");
    console.log("S")
    console.log("h")
    console.log("i")
}


//sayMyName()


// function addTwoNumbers(number1,number2) // values inside function defination known as parameters
// {
//      const add=number1+number2
//      console.log(add)
//      console.log(typeof add)

// }

function addTwoNumbers(number1,number2) // values inside function defination known as parameters
{
    //  const add=number1+number2
    //  return add;
    //console.log("inside function") //after return line no line is executed
    return number1+number2
}
const result=addTwoNumbers(4,5) // arguments
console.log("Result",result)



function loginUserMessage(username="Ashi")
{
    //if(username===undefined)
    if(!username)
    {
        console.log("Please enter the username")
        return 
    }
    return `${username} just logged in`
}


console.log(loginUserMessage("ashi"))
console.log(typeof loginUserMessage())

//when no value is passed in the function of string type then we got undefined
console.log(loginUserMessage())

// const Result=loginUserMessage("ashi")
// console.log("Result is",Result)





