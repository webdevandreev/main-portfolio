import { initThemeSwitcher } from './theme-switcher.js';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.header__button');
  const nav = document.querySelector('.header__nav');
  const contentWrapper = document.querySelector('.content-wrapper');
  const navLinks = document.querySelectorAll('.header__nav-list-item-link');

  button.addEventListener('click', () => {
    nav.classList.toggle('visible');
    contentWrapper.classList.toggle('nav-open');
    button.classList.toggle('active'); // Toggle the active class for animation
  });

  // Инициализация переключателя темы
  initThemeSwitcher();

  navLinks.forEach((link) => {
    link.addEventListener('touchstart', () => {
      link.classList.add('hover-effect');
    });

    link.addEventListener('touchend', () => {
      link.classList.remove('hover-effect');
    });

    // Добавляем обработчик клика для сворачивания навигации
    link.addEventListener('click', () => {
      // Скрываем навигацию
      nav.classList.remove('visible');
      contentWrapper.classList.remove('nav-open');
      button.classList.remove('active'); // Убираем активный класс у кнопки
    });
  });
});
