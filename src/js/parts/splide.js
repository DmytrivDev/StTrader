import { initSlider } from './splidecust';

const widgetSplide = document.querySelector('.widget');
if (widgetSplide) {
  initSlider(widgetSplide, {
    perPage: 1,
    pagination: true,
    gap: '2rem',
    type: 'loop', // Зацикленный режим
    autoplay: true, // Автопрокрутка
    interval: 3000, // Интервал 3 секунды
    speed: 600,
    easing: 'ease-in-out',
    breakpoints: {
      960: {},
      768: {},
    },
  });
}

let tradeSliderInstance;
const trade = document.querySelector('.trade');

const tradeInitSlider = () => {
  if (trade && !tradeSliderInstance) {
    tradeSliderInstance = initSlider(trade, {
      perPage: 2,
      pagination: true,
      gap: '1rem',
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });
  }
};

let trustSliderInstance;
const trust = document.querySelector('.trust');

const trustInitSlider = () => {
  if (trust && !trustSliderInstance) {
    trustSliderInstance = initSlider(trust, {
      perPage: 2,
      pagination: true,
      gap: '1rem',
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });
  }
};

let growSliderInstance;
const grow = document.querySelector('.grow');

const growInitSlider = () => {
  if (grow && !growSliderInstance) {
    growSliderInstance = initSlider(grow, {
      perPage: 2,
      pagination: true,
      gap: '1rem',
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
    });
  }
};

const destroySliders = () => {
  if (tradeSliderInstance) {
    tradeSliderInstance.destroy();
    tradeSliderInstance = null;
  }
  if (trustSliderInstance) {
    trustSliderInstance.destroy();
    trustSliderInstance = null;
  }
  if (growSliderInstance) {
    growSliderInstance.destroy();
    growSliderInstance = null;
  }
};

const checkViewport = () => {
  tradeInitSlider();
  trustInitSlider();
  growInitSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
