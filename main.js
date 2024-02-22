document.addEventListener("DOMContentLoaded", function(){
    d3.json("data/data.json").then( (values)=>{
console.log(values);
    })
 });