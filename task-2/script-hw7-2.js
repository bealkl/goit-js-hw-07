//GOIT javascript homework 07 task 2

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы', ];

const vegetablesList = document.querySelector('ul#ingredients');

const ingredientsList = ingredients.map(vegetable => {
  const newLiElement = document.createElement('li');
  newLiElement.textContent = vegetable;
  return newLiElement;
});
vegetablesList.append(...ingredientsList);