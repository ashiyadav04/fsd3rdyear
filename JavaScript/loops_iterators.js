//for loop


const array=[1,2,3,4,5,6,7,8]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(index," ",element)
   
}

//loop inside loop

for (let f = 0; f < array.length; f++) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
         console.log(f," ","index",index," ",element)
        console.log("**")
    }
    
}




//brerak and continue 


for (let index = 0; index <=20; index++) {

    if(index==5)
    {
        console.log(`Detected 5`)
        break
    }
    console.log(`value of i is ${index}`);

    
}



//while loop

let index=0

while (index<=10) {
    console.log(`value of index is ${index}`)
    index+=2
}

let myArray=["flash","batman","superman"]

let arr=0;

while(arr<myArray.length)
{
  console.log(`value is ${myArray[arr]}`)
  arr+=1
}



//do while loop



let score=1
do {
    console.log(`score is ${score}`)
    score++;
} while (score<=10);










