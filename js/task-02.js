const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allItemEl = document.querySelector("ul");
 const markUp = [];
ingredients.forEach(element => {
  const ItemEl = document.createElement("li");
  ItemEl.textContent = element;
  ItemEl.classList.add("item"); 
  markUp.push(ItemEl)
});
allItemEl.append(...markUp)
console.log(allItemEl);



