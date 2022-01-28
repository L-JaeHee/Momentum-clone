import { apiKey } from "./keys.js";


function onGeoOk(position) {
  console.log(position);
}

function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

console.log(apiKey);