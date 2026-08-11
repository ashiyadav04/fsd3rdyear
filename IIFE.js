//Immediately Invoked Function Expressions (IIFE)

// function chai()
// {
//     console.log(`DB connected`)
// }
// chai()



(function chai()   //named IIFE
{


    console.log(`DB connected`)
//}) () error if you don't put semocolon
})();



(function aurcode(){
    console.log(`DB connected two`)
})();




((name)=>{
    console.log(`DB CONNECTED THREE ${name}`)
})('ashi');




