function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const spanColorEl = document.querySelector(".color");


const btnChangeEl = document.querySelector(".change-color");


btnChangeEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
});