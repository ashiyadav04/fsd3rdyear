const num=[1,2,3,4,5,6,8,9];
const even=num.filter((i)=>(i%2==0));// to filter out the values 
console.log("num",num);
console.log("even",even);
const sq=even.map((i)=>(i*i));// to convert value into square
console.log("Square",sq);
const sum=sq.reduce((s,i)=>(s+i));//to convert into single value 
console.log("Sum",sum);