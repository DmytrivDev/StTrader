import { initCalcSpeedCarse } from './banner';

const lang = document.documentElement.lang || 'en';

function getValueFromKey(obj, key) {
  return key.split('.').reduce((o, i) => (o ? o[i] : null), obj);
}

async function loadTranslations(lang) {
  try {
    const res = await fetch(`/lang/${lang}.json`);
    const translations = await res.json();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getValueFromKey(translations, key);
      if (value !== null && value !== undefined) {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const value = getValueFromKey(translations, key);
      if (value !== null && value !== undefined) {
        el.innerHTML = value;
      }
    });

    initCalcSpeedCarse();
  } catch (err) {
    console.error(
      `Translation file for "${lang}" not found or failed to load.`,
      err
    );
  }
}

loadTranslations(lang);

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = document.documentElement.lang.toUpperCase();

  const actionsLang = document.querySelector('.actions__lang > li > a');
  if (actionsLang) {
    actionsLang.textContent = currentLang;
    document.querySelector('.moblang__open').textContent = currentLang;
  }

  const langLists = document.querySelectorAll('.sub-menu');

  langLists.forEach(list => {
    const items = list.querySelectorAll('li');

    items.forEach(item => {
      const langCode = item.textContent.trim().toUpperCase();

      if (langCode === currentLang) {
        item.classList.add('current-lang');
      } else {
        item.classList.remove('current-lang');
      }
    });
  });
});
