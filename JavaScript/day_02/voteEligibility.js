const checkEligibility=()=>{
    const age =document.getElementById("age").value;
    const output=document.getElementById("output");
    if(age>18)
    {
      output.innerText="Eligible for voting";
    }
    else
    {
        output.innerText=" Not Eligible for voting";
    }
}