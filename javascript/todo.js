const todoForm = document.querySelector(".todo_form");
const todoInput = document.querySelector(".todo_form input");
const todoList = document.querySelector(".todo_list");

let toDos = [];
const todos_key = "todos";
function saveToDos(toDos) {

    localStorage.setItem(todos_key, JSON.stringify(toDos));

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(toDos);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span")
    const btn = document.createElement("button");
   
    
    li.id = newTodo.id;
    span.innerText = `-  ${newTodo.text}`;
    btn.addEventListener("click", deleteTodo)

    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);

}

function deleteTodo(event) {
    const removal = event.target.parentElement;

    toDos = toDos.filter(toDo => toDo.id !== parseInt(removal.id));
    saveToDos(toDos);
    removal.remove();

}

const savedToDos = localStorage.getItem(todos_key);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit)
