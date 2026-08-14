const myPromise=new Promise((resolve,reject)=>{

    let age=15;

    if(age>=18)
    {
        resolve("Eligible for voting ");
    }

    else
    {
        reject("Not eleibible for voting ");
    }

})
//1.method .then() and .catch()
//Error handling .catch() 
// myPromise
// .then((msg)=>console.log(msg))
// .catch((error)=>console.log(error));


//simple just print it
// console.log(myPromise);


//2.method asyn and await
//error handling
//try and catch 
const checkEligibility=async()=>{
    try
    {
    const msg= await myPromise;
    console.log(msg);
    }
    
    catch(error)
    {
        console.log(error)
    }
}
checkEligibility();

