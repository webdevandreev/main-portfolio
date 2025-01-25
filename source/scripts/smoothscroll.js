document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.header__nav-list-item-link');

  links.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение ссылки
      const targetId = this.getAttribute('href').substring(1); // Получаем id целевой секции
      const targetSection = document.getElementById(targetId); // Находим целевую секцию

      // Кастомная функция прокрутки
      smoothScroll(targetSection);
    });
  });

  function smoothScroll(target) {
    const startPosition = window.pageYOffset; // Начальная позиция
    const targetPosition = target.getBoundingClientRect().top + startPosition; // Конечная позиция
    const distance = targetPosition - startPosition; // Расстояние для прокрутки
    const duration = 1000; // Длительность анимации в миллисекундах
    let startTime = null;

    // Функция анимации
    function animation(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Прогресс от 0 до 1

      // Используем функцию easing для замедления в начале и в конце
      const ease = easeInOutQuad(progress);

      // Прокручиваем страницу
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation); // Продолжаем анимацию
      }
    }

    // Функция easing
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation); // Запускаем анимацию
  }
});
