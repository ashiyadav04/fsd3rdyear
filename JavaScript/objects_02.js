//sigleton
const tinderUser=new Object()
const tinderuser={}
console.log(tinderUser);
tinderUser.id=123;
tinderUser.email="xyz@gmail.com"
console.log(tinderUser);




//nested object 
//object inside object 
const anotherUser={
    email:"some@gmail.com",
    fullname:{
        username:
        {
            firstname:"Ashi",
            lastname:"yadav"
        }
    }
}

console.log(anotherUser)
console.log(anotherUser.fullname)
console.log(anotherUser.fullname.username)
console.log(anotherUser.fullname.username.firstname)



const obj1={1:'a',2:'b'}
const obj2={3:'A',4:'B'}
const obj4={5:'a',6:'b'}
//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3)
console.log(typeof obj3)


//when values come from database
//they are come in array format


const users=[{
    id:'1',
    email:'xyz@gmail.com',
    name:'xyz'
}]

console.log(users)
console.log(typeof users)

//console.log(users[1].email)


console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.keys(obj3))
console.log(typeof users) 
console.log(tinderUser.length)
console.log(Object.entries(tinderUser))
console.log(Object.values(tinderUser ))
console.log(tinderUser.hasOwnProperty('email'))
console.log(tinderUser.hasOwnProperty('isloggedin'))
console.log(tinderUser.constructor==Object)

console.log(tinderUser.constructor.name)
console.log(tinderUser.constructor.length)
console.log(tinderUser.constructor.prototype)


