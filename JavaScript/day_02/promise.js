const myPromise=new Promise((resolve,reject)=>{

    let age=18;

    if(age>=18)
    {
        resolve("Eligible for voting ");
    }

    else
    {
        reject("Not eleibible for voting ");
    }

})
myPromise
.then((msg)=>console.log(msg))
.catch((error)=>console.log(error));

// console.log(myPromise);

