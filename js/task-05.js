const inputBtnEl = document.querySelector("input#name-input");
const spanValueEl = document.querySelector("span#name-output");


inputBtnEl.addEventListener("input", () => {
  spanValueEl.textContent = inputBtnEl.value.length
    ? inputBtnEl.value
    : "Anonymous";
});
