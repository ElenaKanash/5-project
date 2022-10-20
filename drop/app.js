const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

//добавляем события к перетаскиваемому элементу
item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

//добавляем события к местам, куда можно перетащить элемент
for (let placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function dragstart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
  e.target.classList.remove('hold', 'hide');
  //e.target.classList.remove('hide')
}

function dragover(e) {
  e.preventDefault()
}

function dragenter(e) {
  e.target.classList.add('hovered');
}

function dragleave(e) {
  e.target.classList.remove('hovered');
}

function dragdrop(e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
}