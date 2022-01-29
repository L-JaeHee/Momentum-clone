import { API_KEY } from "./keys.js";

const temperature = document.querySelector(".temperature div span");
const region = document.querySelector(".temperature div p");
const weatherImg = document.querySelector(".temperature img");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    renderRegion(data);
  });
}

function renderRegion(data) {
  temperature.innerText = String(Math.ceil(Number(data.main.temp))) + '˚C';
  region.innerText = data.name;
  const weather = data.weather[0];
  weatherImg.alt = weather.description;
  weatherImg.src = `http://openweathermap.org/img/wn/${weather.icon}.png`;
}

function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

