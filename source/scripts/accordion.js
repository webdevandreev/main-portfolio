const skillsListItems = document.querySelectorAll('.skills__block');

skillsListItems.forEach((item) => {
  const info = item.querySelector('.skills__list');

  item.addEventListener('mouseenter', () => {
    info.classList.add('show'); // Показать дополнительную информацию
  });

  item.addEventListener('mouseleave', () => {
    info.classList.remove('show'); // Скрыть дополнительную информацию
  });

  item.addEventListener('focusin', () => {
    info.classList.add('show'); // Показать дополнительную информацию при фокусе
  });

  item.addEventListener('focusout', () => {
    info.classList.remove('show'); // Скрыть дополнительную информацию при потере фокуса
  });
});
