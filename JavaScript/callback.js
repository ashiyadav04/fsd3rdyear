function register(cb)
{
    setTimeout(()=>
    console.log("register here"),5000);
    
}
function login(cb)
{
    setTimeout(()=>
    console.log("login here"),10000);
    
}
function getData(cb)
{
   
    
    setTimeout(()=>
    console.log("fetch data"),6000);
    

}
function displayData(cb)
{
    setTimeout(()=>
    console.log("view user data "),8000);
    
}
//callback hell
//ladder of function
register(()=>{
login(()=>{
getData(()=>{
displayData();
});
});
});
console.log("Call another function");