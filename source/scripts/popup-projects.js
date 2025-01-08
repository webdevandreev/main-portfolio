document.querySelectorAll('.projects__block').forEach((block) => {
  const popup = block.querySelector('.projects__popup');

  block.addEventListener('mouseenter', () => {
    popup.style.opacity = '1';
  });

  block.addEventListener('mouseleave', () => {
    popup.style.opacity = '0';
  });

  block.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      if (popup.style.opacity === '1') {
        popup.style.opacity = '0';
      } else {
        popup.style.opacity = '1';
      }
    }
  });

  popup.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      popup.style.opacity = '0';
    }
  });
});
