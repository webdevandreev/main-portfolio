function toggleTheme() {
  const elements = [
    document.body,
    document.querySelector('.header'),
    document.querySelector('.main'),
    document.querySelector('.footer'),
    document.querySelector('.courses'),
    ...document.querySelectorAll('.skills__block-title'),
    document.querySelector('.header__nav-list'),
    document.querySelector('.header__button'),
  ];

  elements.forEach((element) => element?.classList.toggle('dark-theme'));

  // Сохраняем выбор пользователя в localStorage
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function initThemeSwitcher() {
  const savedTheme = localStorage.getItem('theme');
  const slider = document.querySelector('.header__theme-toggle .slider');

  if (savedTheme === 'dark') {
    toggleTheme(); // Вызов функции для добавления темной темы
    if (slider) {
      slider.classList.add('active');
      slider.setAttribute('aria-pressed', 'true');
    }
  }

  if (slider) {
    slider.addEventListener('click', () => {
      slider.classList.toggle('active');
      toggleTheme();

      // Обновляем значение aria-pressed
      slider.setAttribute('aria-pressed', slider.classList.contains('active'));
    });
  }
}

export { initThemeSwitcher };
