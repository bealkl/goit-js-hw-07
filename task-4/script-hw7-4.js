//GOIT javascript homework 07 task 4

function increment(counterValue) {
  return (counterValue += 1);
}

function decrement(counterValue) {
  return (counterValue -= 1);
}

const counterManipulation = document.querySelectorAll('button');

counterManipulation.forEach(buttonElement => buttonElement.addEventListener('click', changeSpanValue));

function changeSpanValue(e) {
  const counterField = document.querySelector('#value');
  const counterNumber = Number(counterField.textContent);

  if (e.target.dataset.action == 'increment') counterField.textContent = increment(counterNumber);
  else if (e.target.dataset.action == 'decrement') counterField.textContent = decrement(counterNumber);
}