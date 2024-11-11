const skillsListItems = document.querySelectorAll('.skills__block');

skillsListItems.forEach((item) => {
  const info = item.querySelector('.skills__list');

  item.addEventListener('mouseenter', () => {
    if (info) {
      info.classList.add('show'); // Показать дополнительную информацию
    }
  });

  item.addEventListener('mouseleave', () => {
    if (info) {
      info.classList.remove('show'); // Скрыть дополнительную информацию
    }
  });
});
