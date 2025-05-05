import { initSlider } from './splidecust';

const widgetSplide = document.querySelector('.widget');
if (widgetSplide) {
  initSlider(widgetSplide, {
    perPage: 1,
    pagination: true,
    gap: '2rem',
    type: 'loop', // Зацикленный режим
    autoplay: true, // Автопрокрутка
    interval: 6000, // Интервал 3 секунды
    speed: 1500,
    easing: 'ease-in-out',
    breakpoints: {
      960: {},
      768: {},
    },
  });
}

// const elemSplides = document.querySelectorAll('.elem');
// elemSplides?.forEach(container => {
//   initSlider(container, {
//     perPage: 2,
//     breakpoints: {
//       960: {},
//       768: {},
//     },
//   });
// });

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

const destroySliders = () => {
  if (tradeSliderInstance) {
    tradeSliderInstance.destroy();
    tradeSliderInstance = null;
  }
};

const checkViewport = () => {
  tradeInitSlider();
  if (window.innerWidth > 960) {
    destroySliders();
  }
};

window.addEventListener('resize', checkViewport);
document.addEventListener('DOMContentLoaded', checkViewport);
