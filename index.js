let LIST = [];
var show = document.getElementById("show");
var input = document.getElementById("input");
let list = document.getElementById("list");
let time = document.getElementById("date");
let today = new Date();
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();
let output = `${date}/${month+1}/${year}`;
time.innerHTML = output;


input.addEventListener("keypress",function(task){
        if(task.keyCode==13){
            var store= input.value;
            input.value="";
        }
        list.innerHTML=`<li><input type="checkbox" id="radio"><span>${store}</span><i class="fas fa-trash"></i></li>`;
})