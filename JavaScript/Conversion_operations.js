let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)


//********************Opdrations************************//



 let value=3
 let negValue=-3
 console.log(typeof negValue)
 console.log(negValue)

 console.log(2+2)
 console.log(2-2)
 console.log(2*2)
 console.log(2/2)
 console.log(2**2)
 console.log(2%2)


 let str1="hello"
 let str2=" Ashi"
 let str3=str1+str2
 console.log(str3)

//

//agr phle string hai toh sabko string ki tarah treat kia jayega
//agr baad mein string hai to suru mai normal and last mai aise hi aad ho jaega string ki trah 

 console.log("1"+2)
 console.log(1+"2")
 console.log("1"+"2")
 console.log("1"+2+2)
 console.log(1+2+"2")

 console.log(3+4*5%3) //use paraenthesis because this is not the right way 


 console.log(true)
 console.log(+true) ///+ true =1
 console.log(+"") // ouotput 0 empty string =0

 let num1,num2,num3
 num1 = num2 = num3 = 2 + 2
 console.log(num1)
let gameCounter=100
// prefix ke nadr value phle increase ho jate hai and postfix mai use ke bad
++gameCounter;
console.log(gameCounter)

//prefix and postfix

//1.Prefix
 let x=3;
 let y=++x;
 console.log(x)
 console.log(y)

//2.Postfix

let a=3;
let b=a++;
 console.log(a)
 console.log(b)

const userLoggedIn=true
const debitCard=true
const loggedInFromGoggle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard && 2==2)
{
    console.log("Allow to buy course")
}


if(loggedInFromEmail || loggedInFromGoggle || 2==4)
{
console.log("User logged in");

}