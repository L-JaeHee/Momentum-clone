// API_KEY 보안 이슈
// const fs = require('fs');
// const path = require('path');
// const apiKey = fs.readFileSync(path.join(__dirname, '../src/weatherApiKey.txt')).toString().trim();
import {global} from '.global.js'

function onGeoOk(position) {
  console.log(position);
}

function onGeoError() {
  alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

console.log(global.apiKey);