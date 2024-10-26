/* в этот файл добавляет скрипты*/
// Получаем элементы из DOM
const button = document.querySelector('.header__button');
const nav = document.querySelector('.header__nav');

// Добавляем обработчик события на кнопку
button.addEventListener('click', () => {
  // Проверяем текущее состояние навигации
  if (nav.style.display === 'block') {
    nav.style.display = 'none'; // Скрываем навигацию
  } else {
    nav.style.display = 'block'; // Показываем навигацию
  }
});
