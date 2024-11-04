// source/scripts/theme-switcher.js

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');

  // Сохраняем выбор пользователя в localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

function initThemeSwitcher() {
  // Проверяем сохраненную тему при загрузке страницы
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
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
