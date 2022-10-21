const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container =document.querySelector('.container')

//индекс активного слайда
let activeSlideIndex = 0;
// получаем количество слайдов
const slidesCount = mainSlide.querySelectorAll('div').length;
//вычисляем первоначальное положение сaйдбара
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
})
downBtn.addEventListener('click', () => {
  changeSlide('down');
})

//меняем слайды при клике на кнопки
function changeSlide(direction) {
  if (direction ==='up') {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0 ) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  //высота слайда равна высоте контейнера со слайдами
  const heightSlide = container.clientHeight;
  //определяем смещение слайда по вертиками
  mainSlide.style.transform = `translateY(-${activeSlideIndex * heightSlide}px)`;
  //определяем смещение сайдбара по вертиками
  sidebar.style.transform = `translateY(${activeSlideIndex * heightSlide}px)`;
}