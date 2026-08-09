//De-Structuring of objects 
//both object and array can de-structured 
// but here first we learn the de structuring of object


const course={
coursename:"js in hindi",
price:'999',
CourseInstructor:"hitesh"
}
//course.CourseInstructor
//de-structuring 
//here courseInstructor is de structured into x or whatever name you want to give 
const {CourseInstructor  : x}=course
//console.log(CourseInstructor)
console.log(x)

const {price: n}=course
console.log(n)
console.log(n.length)

//react part

//const navbar=(props.company)=>{}
// const navbar=({company})=>{



// }

// navbar(company="ashi")

