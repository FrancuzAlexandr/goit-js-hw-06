let counterValue = 0;

const spanValueEl = document.querySelector("#value");

const btnDectementEl = document.querySelector("[data-action = decrement]");
const btnIncrementEl = document.querySelector("[data-action = increment]");

btnIncrementEl.addEventListener(
  "click",
  () => (spanValueEl.textContent = counterValue += 1)
);
btnDectementEl.addEventListener(
  "click",
  () => (spanValueEl.textContent = counterValue -= 1)
);
