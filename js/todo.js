const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", handleToDoSubmit);

function deleteToDo(event) {
  event.path[1].remove();
}

function makingLi(input) {
  const li = document.createElement("li");
  li.innerText = input;

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
  makingLi(todoInputValue);
  todoInput.value = "";
}

