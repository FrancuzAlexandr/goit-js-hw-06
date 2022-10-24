const itemsEl = document.querySelectorAll(".item");


const itemLengthEl = itemsEl.length;

console.log("Number of categories:", itemLengthEl);

itemsEl.forEach(element => {
    const nameOfCategories =element.querySelector("h2");
    console.log("Category:",nameOfCategories.textContent);
    console.log("Elements:",element.querySelectorAll("li").length);
    
});

