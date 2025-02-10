const blocks = document.querySelectorAll('.projects__block');
const popups = document.querySelectorAll('.projects__popup');
const ctaButtons = document.querySelectorAll('.projects__cta');

let isScrolling = false; // Флаг для отслеживания прокрутки
let startY = 0; // Начальная позиция касания

// Добавляем кнопку закрытия для каждого попапа
popups.forEach((popup) => {
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-btn');
  popup.appendChild(closeBtn);
});

// Добавляем обработчики для каждого блока
blocks.forEach((block) => {
  block.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY; // Сохраняем начальную позицию касания
    isScrolling = false; // Сбрасываем флаг прокрутки
  });

  block.addEventListener('touchmove', (event) => {
    const currentY = event.touches[0].clientY;
    const distanceY = Math.abs(currentY - startY);

    // Если движение пальца больше 10 пикселей, считаем это прокруткой
    if (distanceY > 10) {
      isScrolling = true; // Устанавливаем флаг прокрутки
    }
  });

  block.addEventListener('touchend', () => {
    if (!isScrolling) { // Если не было прокрутки
      const popup = block.querySelector('.projects__popup');
      popup.classList.add('active');
      block.style.pointerEvents = 'none';
      setTimeout(() => {
        block.style.pointerEvents = 'auto';
      }, 200);
      document.body.style.overflowY = 'hidden';
    }
  });
});


// Добавляем обработчики для каждого попапа
popups.forEach((popup) => {
  // Обработчик для закрытия попапа по нажатию на область
  document.addEventListener('touchend', (event) => {
    if (popup.classList.contains('active') && !popup.contains(event.target)) {
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
