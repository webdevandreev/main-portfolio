document.addEventListener('DOMContentLoaded', async () => {
  const button = document.querySelector('.header__button');
  const nav = document.querySelector('.header__nav');
  const contentWrapper = document.querySelector('.content-wrapper');
  const navLinks = document.querySelectorAll('.header__nav-list-item-link');

  button.addEventListener('click', () => {
    nav.classList.toggle('visible');
    contentWrapper.classList.toggle('nav-open');
    button.classList.toggle('active'); // Toggle the active class for animation
  });

  // Динамическая загрузка переключателя темы
  const loadThemeSwitcher = async () => {
    const { initThemeSwitcher } = await import('./theme-switcher.js');
    initThemeSwitcher(); // Инициализация переключателя темы
  };

  loadThemeSwitcher(); // Загружаем переключатель темы при загрузке страницы

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

  // Инициализация аккордеона при загрузке страницы
  const { initAccordion } = await import('./accordion.js');
  initAccordion(); // Инициализация аккордеона

  // Инициализация плавной прокрутки при загрузке страницы
  const { initSmoothScroll } = await import('./smoothscroll.js');
  initSmoothScroll(); // Инициализация плавной прокрутки
});
