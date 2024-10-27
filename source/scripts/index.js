document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".header__button");
  const nav = document.querySelector(".header__nav");

  button.addEventListener("click", function () {
    nav.classList.toggle("hidden"); // Переключает класс 'hidden'
  });
});
