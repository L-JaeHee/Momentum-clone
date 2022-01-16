const logInForm = document.querySelector("#login-form");
const logInInput = logInForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const user = greeting.querySelector("span");

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

logInForm.addEventListener("submit", onSubmitLogIn);

const localUserName = localStorage.getItem("username");
if (localUserName === null) {
  logInForm.classList.remove(HIDDEN_CLASS);
} else {
  paintGreeting(localUserName);
}