function toggleTheme() {
  const elements = [
    document.body,
    document.querySelector('.header'),
    document.querySelector('.main'),
    document.querySelector('.footer'),
    document.querySelector('.courses'),
    ...document.querySelectorAll('.skills__block-title')
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
  const slider = document.querySelector('.header__theme-toggle .slider');

  if (savedTheme === 'dark') {
    const elements = [
      document.body,
      document.querySelector('.header'),
      document.querySelector('.main'),
      document.querySelector('.header__top'),
      document.querySelector('.footer'),
      document.querySelector('.courses'),
      ...document.querySelectorAll('.skills__block-title')
    ];

    elements.forEach((element) => {
      if (element) {
        element.classList.add('dark-theme');
      }
    });

    // Устанавливаем класс active на слайдер, если тема темная
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
      const isActive = slider.classList.contains('active');
      slider.setAttribute('aria-pressed', isActive);
    });
  }
}

export { initThemeSwitcher };
