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
        el.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const value = getValueFromKey(translations, key);
      if (value !== null && value !== undefined) {
        el.innerHTML = value;
      }
    });

  } catch (err) {
    console.error(`Translation file for "${lang}" not found or failed to load.`, err);
  }
}

loadTranslations(lang);