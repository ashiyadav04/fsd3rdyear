import jobs from "./data/job.js";

const jobcontainer=document.getElementByClassName("job-container");


jobs.map((job,idx)=>{
const box=document.createElement("div");
const datecon=document.createElement("div")
const headingcon=document.createElement("div")
const tagscon=document.createElement("div")


datecon.innerText=job.date;
headingcon.innerText=job.title;
job.tags.map((t,i)=>
{
    const tag=document.createElement("span");
    tag.innerText=t;
})

})

jobcontainer.appendChild(boxes)


