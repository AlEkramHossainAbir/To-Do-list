
var show = document.getElementById("show");
var input = document.getElementById("input");

let time = document.getElementById("date");
let today = new Date();
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();
let output = `${date}/${month+1}/${year}`;
time.innerHTML = output;


input.addEventListener("keypress",function(task){
        if(task.keyCode==13){
            alert("ok");
        }
        
})

// input.addEventListener("click",function(){
//     alert("check");
// })