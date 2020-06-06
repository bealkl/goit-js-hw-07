//GOIT javascript homework 07 task 6

const textField = document.querySelector('#validation-input');

textField.addEventListener('blur', testCorrectInput);

function testCorrectInput(e) {
  if (textField.classList.contains('valid')) textField.classList.remove('valid');
  if (textField.classList.contains('invalid')) textField.classList.remove('invalid');
  if (textField.value.length == textField.dataset.length) textField.classList.add('valid');
  else textField.classList.add('invalid');
}