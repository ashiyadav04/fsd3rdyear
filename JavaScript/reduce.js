const arr=[1,2,3,4,5];
//reduce is used for converting array into single value 
// const i=0;

const sum1=arr.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0);
const mul=arr.reduce(function (acc,currval){
        console.log(`acc: ${acc} and currval: ${currval}`)

    return acc*currval
},1);
console.log(mul)
console.log(sum1)
const sum=arr.reduce((i,arr)=>i+arr,0);//using arrow function 
console.log(sum);

const shoppingCart=[
    {
        itemName:"js course",
        price:1567
    },
    {
        itemName:"os course",
        price:1001
    },
    {
        itemName:"daa course",
        price:1321
    },
    {
        itemName:"dbms course",
        price:1921
    },
    {
        itemName:"oosd course",
        price:19911
    },
    {
        itemName:"ml course",
        price:1991
    },
    {
        itemName:"ai course",
        price:1990
    }
]

const add=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(add)
