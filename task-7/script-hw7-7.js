//GOIT javascript homework 07 task 7

const textSizeGlass = document.querySelector('#font-size-control');
textSizeGlass.addEventListener('input', e => document.querySelector('span#text').style.fontSize = `${e.target.value}px`);

//make some decoration
textSizeGlass.setAttribute('min', '0');
textSizeGlass.setAttribute('mmax', '100');
textSizeGlass.setAttribute('step', '1');
textSizeGlass.value = parseInt(window.getComputedStyle(document.getElementById("text")).fontSize);