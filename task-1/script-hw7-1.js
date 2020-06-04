//GOIT javascript homework 07 task 1

const ulCategories = document.querySelector('ul#categories');
const ulCategoriesElemCount = ulCategories.children.length;

console.log(`In list ${ulCategoriesElemCount} categories`);
const liElemenst = ulCategories.querySelectorAll('li.item');

//Variant 1
// for (var i = 0; i < ulCategoriesElemCount; i++) {
//   console.log(`Категория: ${liElemenst[i].querySelector('h2').textContent}`);
//   console.log(`Количество элементов: ${liElemenst[i].querySelector('ul').children.length}`);
// }


//Variant 2
[].forEach.call(liElemenst, liNodeElement => {
  console.log(`Категория: ${liNodeElement.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${liNodeElement.querySelector('ul').children.length}`);
});