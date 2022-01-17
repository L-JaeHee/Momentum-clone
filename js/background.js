const numberOfBgImg = 4;
const todayBgImg = Math.floor(Math.random() * numberOfBgImg);
console.log(todayBgImg);

const backgroundImg = document.createElement("img");
backgroundImg.classList.add("bgImg");
backgroundImg.src = `src/${todayBgImg}.jpg`;

document.body.appendChild(backgroundImg);