//GOIT javascript homework 07 task 8

const elementControls = document.querySelectorAll('button');

elementControls.forEach(buttonElement => buttonElement.addEventListener('click', makeSomeChanges));

function makeSomeChanges(e) {
  const valueUserWish = document.querySelector('input').value;
  switch (e.target.dataset.action) {
    case 'render':
      createBoxes(valueUserWish);
      break;
    case 'destroy':
      destroyBoxes();
      break;
  }
  document.querySelector('input').value = '';
}

function createBoxes(amount) {
  const myDivElement = document.querySelector('div#boxes');
  const divArray = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const newDivElement = document.createElement('div');
    newDivElement.style.height = newDivElement.style.width = 30 + i * 10 + 'px';
    newDivElement.style.backgroundColor = randomColorRGB();
    newDivElement.classList.add('divchild');
    divArray.append(newDivElement);
  }
  myDivElement.append(divArray);
}

function destroyBoxes() {
  const myDivElement = document.querySelectorAll('div.divchild');
  for (let keyNode of myDivElement) keyNode.remove();
  // for (let i = 0; i < myDivElement.length; i += 1) myDivElement[i].remove();
}

function randomColorRGB() {
  const colorR = Math.floor(Math.random() * Math.floor(255));
  const colorG = Math.floor(Math.random() * Math.floor(255));
  const colorB = Math.floor(Math.random() * Math.floor(255));
  return `rgb(${colorR},${colorG},${colorB})`;
}
