let countNum = 0;
let checkNum = 0;

const todoForm = document.getElementById("todoform");
const todoWork = document.getElementById("todowork");
const todoList = document.getElementById("todolist");
const todayList = document.getElementById("todaylist");
const todayTodo = document.getElementById("todaytodo");

todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
    e.preventDefault();
    let todoThing = todoWork.value;
    if(todoThing !== "") {
        let todoText = document.createTextNode(todoThing);

    let li = document.createElement("li");

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");

    let delBtn = document.createElement("input");
    delBtn.setAttribute("type", "button");
    delBtn.value = "X";

    li.appendChild(check);
    li.appendChild(todoText);
    li.appendChild(delBtn);

    todoList.appendChild(li);

    todoWork.value = "";

    countNum++;

    check.addEventListener("click", todoCheck);
    delBtn.addEventListener("click", todoDel);
    }
    else {
        alert("유효하지 않은 값입니다");
    }
}

function todoCheck() {
    if(this.checked == true) {
        this.parentNode.setAttribute("style", "color: gray");
        checkNum++;
        todayTodo.innerHTML = checkNum;
    }
    else {
        this.parentNode.removeAttribute("style");
        checkNum--;
        todayTodo.innerHTML = checkNum;
    }
}

function todoDel() {
    if(this.parentNode.firstElementChild.checked == true) {
        checkNum--;
        todayTodo.innerHTML = checkNum;
    }
    this.parentNode.remove();
}