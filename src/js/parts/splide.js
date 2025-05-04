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

// let elemSliderInstance;
// const elem = document.querySelector('.elem');

// const elemInitSlider = () => {
//   if (elem && !elemSliderInstance) {
//     elemSliderInstance = initSlider(elem, {
//       perPage: 2,
//       breakpoints: {
//         960: {},
//         768: {},
//       },
//     });
//   }
// };

// const destroySliders = () => {
//   if (elemSliderInstance) {
//     elemSliderInstance.destroy();
//     elemSliderInstance = null;
//   }
// };

// const checkViewport = () => {
//   initElemSlider();
//   if (window.innerWidth > 960) {
//     destroySliders();
//   }
// };

// window.addEventListener('resize', checkViewport);
// document.addEventListener('DOMContentLoaded', checkViewport);
