const name="asahi"
const repo=123456

console.log(name+repo)
const gamename=new String('Ashi yadav')

console.log(gamename[0]);
console.log(gamename._proto_);
console.log(gamename.length)
console.log(gamename.charAt(0))

console.log(gamename.padEnd(12,"*"))
console.log(gamename.toLowerCase())    


console.log(gamename.indexOf('h'))
console.log(gamename.codePointAt('i'))



const substr=gamename.substr(0,3)

console.log(substr)
const anotherstring=gamename.slice(0,3)
console.log(anotherstring)
console.log(gamename.slice(-1,6))


const ashi="    ashi  yadav    "
console.log(ashi)
console.log(ashi.trim())

const url="https://ashi.com/ashi%20yadav";
console.log(url)
url.replace('%20','-')
console.log(url)
console.log(url.replace('%20','-'))


const str="my name is ashi yadav";
const words=str.split(' ')
console.log(words[3])
console.log(str.includes('ashi'))
console.log(str.blink())
console.log(str.big())
console.log(str.bold(8))
