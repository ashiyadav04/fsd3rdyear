//for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5,6]
console.log("length of array:",arr.length)

//for of loop
for (const num of arr) {

    console.log( num);

    console.log(typeof num);
    // console.log("string")
    console.log(num.toString());

    console.log(typeof num.toString());
    
}

//string
const greetings="hello world!"
console.log("length of string",greetings.length)
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


//Map->key value pair and keys are unique

//initialization
const map=new Map()

//puting values
map.set('a',1)
map.set('b',2)
map.set('c',3)
map.set('d',4)
map.set('e',5)
map.set('f',6)
console.log(map.get('a'));
console.log(map.size)
console.log(map)

//get data in array format 
for (const key of map) {
     console.log(key)
}


//destructure of array
for (const [key,value] of map) {
     console.log(key,':-',value)
}

// const myobj={
//     'game1':'ludo',
//     'game2':'snakeludo'

// }
// console.log(myobj)
// //other ways to iterate objects 
// //through this we can't
// for (const [keys,value] of myobj) {
//     console.log(keys,":",value)
// }
const myobj={
    js:"javascript",
    py:"python",
    cpp:"c++",
    swift:"swift by apple",
    rb:"ruby"
}


//for objects there is for in loop

for (const key in myobj) {
   console.log(myobj[key.valueOf()])
    console.log(`${key} shortcut for ${myobj[key]}`)
    
}

//for in loop for arrays
const myarr=[1,2,3,4,5,6,7,8,9,10]

for(const num in myarr)
{
    console.log(`${myarr[num]} is at index ${num}`)
}

// const map2=new Map();
// map.set('a',"ashi")
// map.set('d',"dhruv")
// map.set('u',"ujjwal")


// //maps are not iterable thats why no error and noyhing get print 
// for(const key in map2)
// {
//     console.log(key)
// }