const skillsListItems = document.querySelectorAll('.skills__list');

skillsListItems.forEach((item) => {
  const info = item.querySelector('.skill-info');

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
