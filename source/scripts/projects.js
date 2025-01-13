const blocks = document.querySelectorAll('.projects__block');
const popups = document.querySelectorAll('.projects__popup');
const ctaButtons = document.querySelectorAll('.projects__cta');

// Добавляем кнопку закрытия для каждого попапа
popups.forEach((popup) => {
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  popup.appendChild(closeBtn);
});

// Добавляем обработчики для каждого блока
blocks.forEach((block) => {
  block.addEventListener('touchstart', () => {
    const popup = block.querySelector('.projects__popup');
    popup.classList.add('active');
    block.style.pointerEvents = 'none';
    setTimeout(() => {
      block.style.pointerEvents = 'auto';
    }, 200);
    document.body.style.overflowY = 'hidden';
  });
});

// Добавляем обработчики для каждого попапа
popups.forEach((popup) => {
  popup.addEventListener('touchend', (event) => {
    if (event.target.closest('.projects__popup') === popup) {
      popup.classList.remove('active');
      document.body.style.overflowY = 'auto';
    }
  });

  // Добавляем обработчик для кнопки закрытия
  popup.querySelector('.close-btn').addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.style.overflowY = 'auto';
  });
});

// Добавляем обработчики для каждой кнопки
ctaButtons.forEach((ctaButton) => {
  ctaButton.addEventListener('touchstart', (event) => {
    event.preventDefault();
    window.open(ctaButton.href, '_blank');
  });
});
