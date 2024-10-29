document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.header__button');
  const nav = document.querySelector('.header__nav');

  button.addEventListener('click', () => {
    nav.classList.toggle('visible'); // Переключаем класс 'visible'
  });
});
