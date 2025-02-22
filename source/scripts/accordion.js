export function initAccordion() {
  const skillsListItems = document.querySelectorAll('.skills__block');

  skillsListItems.forEach((item) => {
    const info = item.querySelector('.skills__list');

    // Проверка ширины экрана
    const toggleSkillsList = () => {
      if (window.innerWidth < 768) {
        info.classList.toggle('show'); // Переключить видимость списка
      }
    };

    // Обработчик события для наведения мыши
    item.addEventListener('mouseenter', () => {
      if (info && window.innerWidth >= 768) {
        info.classList.add('show'); // Показать дополнительную информацию
      }
    });

    item.addEventListener('mouseleave', () => {
      if (info && window.innerWidth >= 768) {
        info.classList.remove('show'); // Скрыть дополнительную информацию
      }
    });

    // Обработчик события для клика
    item.addEventListener('click', toggleSkillsList);
  });

  // Добавляем обработчик события для изменения размера окна
  window.addEventListener('resize', () => {
    skillsListItems.forEach((item) => {
      const info = item.querySelector('.skills__list');
      if (window.innerWidth >= 768) {
        info.classList.add('show'); // Показываем списки на больших экранах
      } else {
        info.classList.remove('show'); // Скрываем списки на мобильных
      }
    });
  });
}
