const marvel_heros=["thor","ironman","spiderman"]

const dc=["superman","flash","batman"]
// //marvel_heros.push(dc)
// console.log(marvel_heros)
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1])

 const all_heroes=marvel_heros.concat(dc)
console.log(all_heroes )


const all_new_heros = [...marvel_heros,...dc]

console.log(all_new_heros)
const another_array=[1,2,3,[4,5],6,7,[8,9,[10,11,12]]]

console.log(another_array)

const real_another_array=another_array.flat(Infinity);

console.log(real_another_array)

console.log(Array.isArray("Ashi"))

console.log(Array.isArray(real_another_array))
console.log(Array.from("ashi"))
console.log(Array.from({
    name:"ashi" 
})) //empty array





let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))
console.log(Array.from("ashi yadav"))

console.log(Array.from([1,2,3,4,5,6],(x)=>x+x))

const a1=Array.of();
console.log(a1)
a1.push(1)
a1.push(2)

console.log(a1)