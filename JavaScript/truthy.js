  const userEmail="h@hitesh.ai"

  if( userEmail) {
    console.log("Got user email")
  }
  else
  {
    console.log("Don't have user email")
  }


  //falsy values
  //false,0,-0,BigInt 0n,"",undefined,null,NaN 


  //truthy values
  //"0",'false' bacause writthen in string," ",[],{},function(){}empty function

//for array
  if(userEmail.length===0)
  {
    console.log("array is empty");
  }
  else
  {
    console.log("Array is not empty")
  }


  //for object

const empobj={}
if(Object.keys(empobj).length===0) console.log("empty object")
else console.log("Not empty object ")


//Nullish Coalescing Operator(??): work only on null and undefined


let val1;
//val1=5??10
//val1=null??10
//val1=undefined??5
val1=null??10??20//first value assign 10
console.log(val1)



//Ternary operator

//condition?true:false

const iceTea=100

iceTea<=80 ? console.log("less than 80"):console.log("greater than 80")


