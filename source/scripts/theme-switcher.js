function toggleTheme() {
  const elements = [
    document.body,
    document.querySelector('.header'),
    document.querySelector('.main'),
    document.querySelector('.footer'),
  ];

  elements.forEach((element) => {
    if (element) {
      element.classList.toggle('dark-theme');
    }
  });

  // Сохраняем выбор пользователя в localStorage
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

function initThemeSwitcher() {
  // Проверяем сохраненную тему при загрузке страницы
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    const elements = [
      document.body,
      document.querySelector('.header'),
      document.querySelector('.main'),
      document.querySelector('.header__top'),
      document.querySelector('.footer'),
    ];

    elements.forEach((element) => {
      if (element) {
        element.classList.add('dark-theme');
      }
    });
  }

  // Находим кнопку переключения темы и добавляем обработчик события
  const themeToggleButton = document.querySelector(
    '.header__theme-toggle button'
  );
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  }
}

export { initThemeSwitcher };
