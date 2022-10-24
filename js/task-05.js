const inputBtnEl = document.querySelector("input#name-input");
const spanValueEl = document.querySelector("span#name-output");

// inputBtnEl.addEventListener("input", onInputChange);

// function onInputChange(event) {
//     spanValueEl.textContent = !inputBtnEl.value.length ? "Anonymous" : event.currentTarget.value;
// }

inputBtnEl.addEventListener("input", () => {
  spanValueEl.textContent = inputBtnEl.value.length
    ? inputBtnEl.value
    : "Anonymous";
});
