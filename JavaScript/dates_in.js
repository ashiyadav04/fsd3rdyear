//Dates

let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toTimeString())
console.log(mydate.getTimezoneOffset())
console.log(mydate.toLocaleString())

console.log(typeof mydate)


// let mycreateddate=new Date(2023,11,23)
//let mycreateddate=new Date(2023,11,23,5,3)


let mycreateddate=new Date("2023-01-23")
console.log(mycreateddate) 
console.log(mycreateddate.toString())
console.log(mycreateddate.toDateString())
console.log(mycreateddate.toLocaleDateString())
console.log(mycreateddate.toLocaleString())


let myTampStamp=Date.now()
console.log(typeof myTampStamp)

console.log(myTampStamp)
console.log(mycreateddate.getTime())

console.log(mycreateddate.getTime().toFixed())
console.log(Math.floor(Date.now()/1000))

let newDate= new Date() ///object
console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.getMonth())

console.log(`${newDate.getDay()} and the time`)

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))

