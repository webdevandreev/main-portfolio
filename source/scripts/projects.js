const block = document.querySelector('.projects__block');
const popup = document.querySelector('.projects__popup');

block.addEventListener('touchstart', () => {
  popup.classList.add('active');
});

// Закрытие попапа при клике вне области
document.addEventListener('touchstart', (event) => {
  if (!popup.contains(event.target) && !block.contains(event.target)) {
    popup.classList.remove('active');
  }
});
