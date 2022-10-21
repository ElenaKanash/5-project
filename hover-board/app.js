const board = document.querySelector('#board');
const SQUARES_NUMBER = 520;
const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div'); //создаем ячейки
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square)
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  });

  board.append(square);
}

function setColor(elem) {
  const color = getRandomColor();
  elem.style.backgroundColor = color;
  elem.style.boxShadow = `0 0 2px ${color} 0 0 10px ${color}`
}

function removeColor(elem) {
  elem.style.background = '#1d1d1d';
  elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index]
}