const button = document.querySelector('button');
const paragraph = document.querySelector('.color');

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;

  paragraph.textContent =  "#" + randomColor;
}

button.addEventListener('click', changeColor);