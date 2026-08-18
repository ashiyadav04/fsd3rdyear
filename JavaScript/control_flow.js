// if(2=="2") // output true because == not check datatype 
// {
//     console.log("ASHI")
// }

if(2==="2") //now it check the datatype also it is known as strict equal
{
    //console.log("strict equal")
}
else
{
    //console.log("equall")
}

const isUserLoggedIn=true
const temperature=41
if(temperature<50)
{
    //console.log("less than 50")
}
else
{
    //console.log("Hot")
}



// const score=200
// if(score>100)
// {
//     const power="fly"
//     console.log(`user power: ${power}`);
// }

// const score=200
// if(score>100)
// {
//     const power="fly"
    
// }
// console.log(`user power: ${power}`);// error because power is accessed out of its scope block


const score=200
if(score>100)
{
    var power="fly"
}

//console.log(`user power: ${power}`); //now no error because var is used

// thats why use of var is not done in our code because it not restrict scope of variable



//+++++++++++++++++++++++++++shorthand notation++++++++++++++++++++++++++++++++


const balance =1000
if(balance>500) console.log("test"); // no error 

const ans =200
if(ans==200) console.log("yes"),console.log("Ashi"),console.log("I am fine"); // doing this is not a good practice 


// Basic if else if else ladder

const a=100
if(a>100)
{
    console.log("greater than 100")
}
else if(a<100)
{
    console.log("less than 100")
}
else
{
    console.log("equal to 100")
}



//if else using shorthand notation 
const b=100
if(b>100) console.log("Greter")
else if (b==100) console.log("equal")
else console.log("less")

