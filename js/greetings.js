const greetingForm = document.querySelector("#greeting-form");
const loginInput = greetingForm.querySelector("input");
const userNameSpan = document.querySelector("#greeting span:last-child");

const HIDDEN_CLASSNAME = "hidden";

function paintGreeting(userName) {
  
}

function onSubmitGreetingForm(event) {
  event.preventDefault();
  const userName = loginInput.value;
  greetingForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("userName", userName);
}

greetingForm.addEventListener("submit", onSubmitGreetingForm);