
let a=2200
if(true)
{
    let a=10
    const b=20
    //var c=30
    console.log("Inner: ",a)
}

console.log(a)
// console.log(b)
//console.log(c)


function one(){
    const username="ashi"

    function two(){
        const website="youtube"
        console.log(username)
    }

    //console.log(website)

    two()
}

one()





console.log(addone(5))
function addone(num){  //function it can declares above its defination
    return num+1
}




// console.log(add) //can't acees add before its initialization
const add=function(num){  //known as expression it can't called above its deceelaration defination
    return num+2
}

console.log(add(6))




