let LIST = [];
let id = 0;
let position = "beforeend";
var show = document.getElementById("show");
var input = document.getElementById("input");
let list = document.getElementById("list");
let time = document.getElementById("date");
let restart = document.getElementById("restart");
let today = new Date();
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();
let output = `${date}/${month + 1}/${year}`;
time.innerHTML = output;


input.addEventListener("keypress", (task) =>{
    if (task.keyCode == 13) {
        var store = input.value;
        if (store) {
            list.innerHTML = `<li><input type="checkbox" id="radio"><span>${store}</span><i class="fas fa-trash"></i></li>`;
        }
        input.value = "";

    }
    
})

restart.addEventListener("click", () =>{
    alert("ok");
})