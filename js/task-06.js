const validationInputEl = document.querySelector("#validation-input");
console.log(validationInputEl);

const dataLength = validationInputEl.dataset.length;
console.log(dataLength);

validationInputEl.addEventListener("blur", () => {


    validationInputEl.classList.remove("valid", "invalid")
    if (validationInputEl.value.length === Number(dataLength)) {
        validationInputEl.classList.add("valid");
    } else {
        validationInputEl.classList.add("invalid")
    }
});