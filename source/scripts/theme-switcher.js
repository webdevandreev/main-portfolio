export function initThemeSwitcher() {
  const themeToggle = document.querySelector('.header__theme-toggle-button');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function toggleTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    themeToggle.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Проверяем сохраненную тему или системные настройки
  const savedTheme = localStorage.getItem('theme');
  if (
    savedTheme === 'dark' ||
    (savedTheme === null && prefersDarkScheme.matches)
  ) {
    toggleTheme(true);
  }

  themeToggle.addEventListener('click', () => {
    toggleTheme(!document.body.classList.contains('dark-theme'));
  });

  // Слушаем изменения системных настроек
  prefersDarkScheme.addListener((e) => {
    if (localStorage.getItem('theme') === null) {
      toggleTheme(e.matches);
    }
  });
}
