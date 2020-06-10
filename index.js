let LIST = [];
let id=0;
var store;

var show = document.getElementById("show");
var input = document.getElementById("input");
let list = document.getElementById("list");
let time = document.getElementById("date");
let clear = document.getElementById("clear");
//let del = document.getElementsByClassName("fa-trash-o");
let date = {weekday: "long" , month: "short" , day: "numeric"};
let today = new Date();
const CHECK = document.getElementsByClassName("fa-check-circle");
const UNCHECK =document.getElementsByClassName("fa-circle-thin");
const LINE_THROUGH = "lineThrough";
// let month = today.getMonth();
// let date = today.getDate();
// let year = today.getFullYear();
// let output = `${date}/${month + 1}/${year}`;
// time.innerHTML = output;
time.innerHTML = today.toLocaleDateString("en-US",date);


addToDo = (toDo,id, done, trash) =>{
    let text =  `<li><i class="fa fa-circle-thin" job="complete" id="${id}"></i><span class="text lineThrough">${toDo}</span><i class="fa fa-trash-o de" id="${id}" job="delete" onclick="del(id)"></i></li>`;
    let position = "beforeend";
    list.insertAdjacentHTML(position,text);
} 


input.addEventListener("keypress", (task) =>{
    if (task.keyCode == 13) {
         store = input.value;
        if (store) {
            addToDo(store,id,false,false); 
            LIST.push({
                name: store,
                id:id,
                done: false,
                trash:false
            });
            id++;
        }
        input.value = "";
        

    }
    
})
clear.addEventListener("click",()=>{
    list.innerHTML= "";
})

del =(op) =>{
    alert(op);
    console.log(LIST[op]);
    var x= LIST[op];
    console.log(LIST.splice(op,op+1))
}