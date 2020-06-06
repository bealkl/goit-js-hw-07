//GOIT javascript homework 07 task 5

const inputField = document.querySelector('#name-input');

inputField.addEventListener('input', inputSolution);

function inputSolution(e) {
  const outputField = document.querySelector('#name-output');
  if (e.target.value === '') outputField.textContent = 'незнакомец';
  else outputField.textContent = e.target.value;
}