function register()
{
    waitforseconds(5000);
    console.log("register here")
}
function login()
{
    waitforseconds(10000);
    console.log("login here")
}
function getData()
{
    waitforseconds(6000);
    console.log("fetch data")
}
function displayData()
{
    waitforseconds(8000);
    console.log("view user data")
}
function waitforseconds(delay)
{
    const mt=Date.now()+delay;
    while(Date.now()<mt)
    {

    }

}
register();
login();
getData();
displayData();
console.log("Call another function");