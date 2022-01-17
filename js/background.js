const bgImgs = ["0.jpg", "1.jpg", "2.jpg"];
const todayBgImg = bgImgs[Math.floor(Math.random() * bgImgs.length)];

const backgroundImg = document.createElement("img");
backgroundImg.classList.add("backgroundImg");
backgroundImg.src = `src/${todayBgImg}`;

document.body.appendChild(backgroundImg);