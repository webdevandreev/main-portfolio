document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.header__nav-list-item-link');

  links.forEach((link) => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение ссылки
      const targetId = this.getAttribute('href').substring(1); // Получаем id целевой секции
      const targetSection = document.getElementById(targetId); // Находим целевую секцию

      if (!targetSection) {
        return;
      }

      if (targetSection.offsetParent === null) {
        return;
      }

      const startPosition = window.pageYOffset; // Начальная позиция
      const targetPosition = targetSection.getBoundingClientRect().top + startPosition; // Конечная позиция
      const distance = targetPosition - startPosition; // Расстояние для прокрутки

      if (distance < 0) {
        window.scrollTo(0, startPosition + distance);
        return;
      }

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

        if (timeElapsed >= duration) {
          startTime = null;
          window.history.pushState({}, '', window.location.href); // Сбрасываем историю браузера
        }

        if (timeElapsed < duration) {
          requestAnimationFrame(animation); // Продолжаем анимацию
        }
      }

      // Функция easing
      function easeInOutQuad(t) {
        t = Math.min(Math.max(t, 0), 1);
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      requestAnimationFrame(animation); // Запускаем анимацию
    });
  });

  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
});
