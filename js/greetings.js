const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const user = greeting.querySelector("span");
const editButton = greeting.querySelector("i");
const editInput = greeting.querySelector(".input-username");
const editForm = document.querySelector("#edit-form");


const HIDDEN_CLASS = "hidden";

function paintGreeting(userName) {
  user.innerText = userName;
  greeting.classList.remove(HIDDEN_CLASS);
}

function onSubmitLogIn(event) {
  event.preventDefault();
  const userName = logInInput.value;
  localStorage.setItem("username", userName);
  logInForm.classList.add(HIDDEN_CLASS);
  
  paintGreeting(userName);
}

function handleClickEditButton(event) {
  editInput.value = localStorage.getItem("username");
  user.classList.add(HIDDEN_CLASS);
  editInput.classList.remove(HIDDEN_CLASS);
}

function onSubmitEditLogIn(event) {
  event.preventDefault();
  const userName = editInput.value;
  localStorage.setItem("username", userName);
  user.innerText = userName;
  editInput.classList.add(HIDDEN_CLASS);
  user.classList.remove(HIDDEN_CLASS);
}

logInForm.addEventListener("submit", onSubmitLogIn);
editButton.addEventListener("click", handleClickEditButton);
editForm.addEventListener("submit", onSubmitEditLogIn);


const localUserName = localStorage.getItem("username");
if (localUserName === null) {
  logInForm.classList.remove(HIDDEN_CLASS);
} else {
  paintGreeting(localUserName);
}