// Получаем элементы из DOM
const button = document.querySelector('.header__button');
const nav = document.querySelector('.header__nav');

// Добавляем обработчик события на кнопку
button.addEventListener('click', () => {
  nav.classList.toggle('header__nav--active'); // Переключаем класс активности
});
