const burger = document.querySelector('.burger');

const langMenu = document.querySelector('.moblang');
const mobPanel = document.querySelector('.mobmenu__panel');
const langLinks = document.querySelectorAll('.moblang__list .sub-menu a');

const openLangsBtn = document.querySelector('.moblang__open');
const closeLangsBtn = document.querySelector('.moblang__close');

function addleLangMenu() {
  langMenu.classList.add('isOpened');
  mobPanel.classList.add('isMove');
}

export function closeLangMenu() {
  langMenu.classList.remove('isOpened');
  mobPanel.classList.remove('isMove');
}

function initLangMenu() {
  if (openLangsBtn && langMenu) {
    openLangsBtn.addEventListener('click', addleLangMenu);
  }

  document.addEventListener('click', event => {
    const isClickBurger = burger?.contains(event.target);

    if (isClickBurger) {
      closeLangMenu();
    }
  });

  langLinks?.forEach(link => {
    link.addEventListener('click', closeLangMenu);
  });

  closeLangsBtn?.addEventListener('click', closeLangMenu);
}

function equalizeHeights() {
  if (!mobPanel || !langMenu) return;

  mobPanel.style.height = 'auto';
  langMenu.style.height = 'auto';

  const maxHeight = Math.max(mobPanel.offsetHeight, langMenu.offsetHeight);

  mobPanel.style.height = `${maxHeight}px`;
  langMenu.style.height = `${maxHeight}px`;
}

window.addEventListener('resize', equalizeHeights);
window.addEventListener('DOMContentLoaded', () => {
  initLangMenu();
  equalizeHeights();
});
