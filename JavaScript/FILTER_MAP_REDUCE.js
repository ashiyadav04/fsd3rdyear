const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item)=>{
    console.log(item);
    return item;
}) 

// Here we see that this function retrun nothing to values always we get undefined 

console.log(values)


//const myNums=[1,2,3,4,5,6,7,8,9]


//in filter there is a call back function 
// const num=myNums.filter((item)=> item%2==0)
// console.log(num) //output would be [2,4,6,8]


// const num=myNums.filter((item)=> {item%2==0})
// console.log(num) //but hrer we get empty array []
//because there is no return in it 



// const num=myNums.filter((item)=> {
//    return  item%2==0
// })
// console.log(num)


// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })

// console.log(newNums)


const myNumbers=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNumbers.map((num)=>num+10)
const newNums=myNumbers.map((num)=>{
    return num+10
})
console.log(newNums)



//chaining method
