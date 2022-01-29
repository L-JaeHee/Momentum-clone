import { API_KEY } from "./keys.js";

const temperature = document.querySelector(".temperature div span");
const region = document.querySelector(".temperature p");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    temperature.innerText = String(Math.ceil(Number(data.main.temp))) + '˚C';
    region.innerText = data.name;
  });
}

function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

