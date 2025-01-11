const block = document.querySelector('.projects__block');
const popup = document.querySelector('.projects__popup');
const ctaButton = document.querySelector('.projects__cta');
const closeBtn = document.createElement('button'); // Создаем кнопку закрытия

// Добавляем класс и текст для кнопки закрытия
closeBtn.classList.add('close-btn');
popup.appendChild(closeBtn); // Вставляем кнопку в попап

block.addEventListener('touchstart', () => {
  popup.classList.add('active');
  block.style.pointerEvents = 'none'; // добавляем это, чтобы избежать immediate клика на кнопке
  setTimeout(() => {
    block.style.pointerEvents = 'auto'; // восстанавливаем pointerEvents через 200 миллисекунд
  }, 200);
  document.body.style.overflowY = 'hidden'; // Остановка прокрутки страницы по вертикали
});

popup.addEventListener('touchend', (event) => {
  if (event.target.closest('.projects__popup') === popup) {
    popup.classList.remove('active');
    document.body.style.overflowY = 'auto'; // Восстановление прокрутки страницы по вертикали
  }
});

ctaButton.addEventListener('touchstart', (event) => {
  event.preventDefault(); // предотвращаем стандартное поведение кнопки
  window.open(ctaButton.href, '_blank'); // открываем ссылку в новом окне
});

// Обработчик для закрытия попапа по клику на крестик
closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  document.body.style.overflowY = 'auto'; // Восстановление прокрутки страницы по вертикали
});
