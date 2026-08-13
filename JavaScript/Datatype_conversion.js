let score="33abc"
console.log(typeof score);//output number
console.log(typeof (score));//output number

let valueInNumber=Number(score);
console.log(typeof(valueInNumber))//output number
console.log(valueInNumber) //output NaN


let s=null;
let a=Number(s);
console.log(typeof a)// type NaN
console.log(a)//output 0

let n=undefined
let m=Number(n)
console.log(typeof m)// number
console.log(m)// NaN

let p=true;
let q=Number(p)
console.log(typeof q) //number 
console.log(q)// output 1