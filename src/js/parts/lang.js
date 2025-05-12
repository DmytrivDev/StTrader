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

// document.addEventListener('DOMContentLoaded', () => {
//   const currentLang = document.documentElement.lang.toUpperCase();

//   const actionsLang = document.querySelector('.actions__lang > li > a');
//   if (actionsLang) {
//     actionsLang.textContent = currentLang;
//     document.querySelector('.moblang__open').textContent = currentLang;
//   }

//   const langLists = document.querySelectorAll('.sub-menu');

//   langLists.forEach(list => {
//     const items = list.querySelectorAll('li');

//     items.forEach(item => {
//       const langCode = item.textContent.trim().toUpperCase();

//       if (langCode === currentLang) {
//         item.classList.add('current-lang');
//       } else {
//         item.classList.remove('current-lang');
//       }
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const fileName = window.location.pathname.split('/').pop(); // contact.html
//   const isIndex = fileName === 'index.html';
//   const isLangPage = /^[a-z]{2}\.html$/i.test(fileName); // pl.html, it.html etc.

//   if (isIndex || isLangPage) return;

//   const langLists = document.querySelectorAll('.sub-menu, .moblang__list .sub-menu');

//   langLists.forEach((list) => {
//     list.querySelectorAll('a').forEach((link) => {
//       const langCode = link.textContent.trim().toLowerCase();

//       if (langCode === 'en') {
//         link.setAttribute('href', `/${fileName}`);
//       } else {
//         link.setAttribute('href', `/${langCode}/${fileName}`);
//       }
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   const currentLang = document.documentElement.lang.toLowerCase();
//   if (currentLang === 'en') return;

//   const links = document.querySelectorAll('a[href^="/"]:not(.actions__lang a):not(.moblang__list a)');

//   links.forEach(link => {
//     const href = link.getAttribute('href');

//     // Якщо просто "/"
//     if (href === '/') {
//       link.setAttribute('href', `/${currentLang}.html`);
//     }

//     // Якщо веде на html-файл і не коренева сторінка
//     else if (href.endsWith('.html')) {
//       link.setAttribute('href', `/${currentLang}${href}`);
//     }
//   });
// });
