// Butrtons
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const clearBtn = document.querySelector(".clear");

const lastTime = document.querySelector(".last-time");
const currentTime = document.querySelector(".time");

const paintIcon = document.querySelector(".paint");
const colorsPanel = document.querySelector(".colors-panel");
const colorBtns = document.querySelectorAll(".color-btn");

let startStoper;
let seconds = 0;
let minutes = 0;


const showColorPanel = () => {
  colorsPanel.classList.toggle("active")
}

const changeMainColor = (e) => {
  const clickedBtn = e.target;
  if(clickedBtn.classList.contains("gold")) {
    document.documentElement.style.setProperty("--main-color", "rgba(245, 189, 11, 1)")
  } else if(clickedBtn.classList.contains("blue")) {
    document.documentElement.style.setProperty("--main-color", "rgba(0, 58, 224, 1)")
  } else if(clickedBtn.classList.contains("red")) {
    document.documentElement.style.setProperty("--main-color", "rgba(244, 11, 14, 1)")
  }
}

const stoper = () => {
  clearInterval(startStoper)
startStoper = setInterval(() => {
seconds++;
currentTime.textContent = `0${minutes}:${(seconds / 100).toFixed(2)}`
if(seconds > 59 *100) {
  seconds = 0;
  currentTime.textContent = `0${minutes}:${(seconds / 100).toFixed(2)}`;
  minutes++;
  seconds++;
}
}, 10)
}


const pauseStoper = () => {
  clearInterval(startStoper)
}

const stopStoper = () => {
  clearInterval(startStoper);
  lastTime.textContent = `yor last time ${currentTime.textContent}`;
  currentTime.textContent = "0:00";
  minutes = 0;
  seconds = 0; 
}

const clearAll = () => {
  clearInterval(startStoper);
  lastTime.textContent = "";
  currentTime.textContent = "0:00";
  minutes = 0;
  seconds = 0; 
}


clearBtn.addEventListener("click", clearAll)
stopBtn.addEventListener("click", stopStoper)
pauseBtn.addEventListener("click", pauseStoper)
startBtn.addEventListener("click", stoper)
paintIcon.addEventListener("click", showColorPanel);
colorBtns.forEach(btn => btn.addEventListener("click", changeMainColor))