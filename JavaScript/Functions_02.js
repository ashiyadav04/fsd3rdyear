//Functions 


//rest operator->...
//it gives array
// function calculateCartPrice(...num1)
// {
//    return num1 
// }

// console.log(calculateCartPrice(101,200,300,500))

function calculateCartPrice(val1,val2,...num1)
 {
    return val1,val2,num1 
 }

console.log(calculateCartPrice(200,200,400,500,600))


//object

// const user={
//     username:"ashi",
//     price:199
// }

function handleobject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user)


//another method of passing object
handleobject({

        username:"Ashi yadav",
        price:"199"
})

// you acn pass array


//array

const myNewArray=[200,400,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}

// let result  = returnSecondValue(myNewArray)

// console.log("Second value is :",result)


let a = returnSecondValue([200,300,400])

console.log(a)
