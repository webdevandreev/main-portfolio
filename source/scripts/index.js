document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.header__button');
  const nav = document.querySelector('.header__nav');
  const contentWrapper = document.querySelector('.content-wrapper');

  button.addEventListener('click', () => {
    nav.classList.toggle('visible');
    contentWrapper.classList.toggle('nav-open');
  });
});
