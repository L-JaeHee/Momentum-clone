const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const target = event.path[1];
  toDos = toDos.filter((item) => item.id !== parseInt(target.id));
  target.remove();
  
  saveToDo();
}

function makeLi(value) {
  const li = document.createElement("li");
  li.id = value.id;
  li.innerText = value.text;
  
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-trash-alt");
  i.addEventListener("click", deleteToDo);
  
  li.appendChild(i);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoInputObj = {
    text: todoInput.value,
    id: Date.now(),
  }

  makeLi(todoInputObj);
  todoInput.value = "";

  toDos.push(todoInputObj);
  saveToDo(todoInputObj);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
if (savedToDos) {
  toDos = savedToDos;
  savedToDos.forEach(makeLi);
}