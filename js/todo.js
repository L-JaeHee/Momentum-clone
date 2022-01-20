const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDo(value) {
  toDos.push(value);
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const target = event.path[1];
  target.remove();
}

function makeLi(value) {
  const li = document.createElement("li");
  li.innerText = value;
  
  const i = document.createElement("i");
  i.classList.add("far");
  i.classList.add("fa-trash-alt");
  i.addEventListener("click", deleteToDo);
  
  li.appendChild(i);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;

  makeLi(todoInputValue);
  todoInput.value = "";

  saveToDo(todoInputValue);
}

todoForm.addEventListener("submit", handleToDoSubmit);
