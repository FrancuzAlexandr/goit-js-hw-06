const inputSizeEl = document.querySelector("input#font-size-control");


const spanTextEl = document.querySelector("span#text");


inputSizeEl.addEventListener("input", () => {
  spanTextEl.style.fontSize = inputSizeEl.value + "px";
});
