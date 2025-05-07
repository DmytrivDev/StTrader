import Cookies from 'js-cookie';

document.addEventListener('DOMContentLoaded', () => {
  const cookies = document.querySelector('.cookies');
  const acceptFunctional = document.querySelector('.acceptFun');
  const acceptAll = document.querySelector('.acceptAll');

  if (!cookies) return;

  const userConsent = Cookies.get('user_cookies');
  if (userConsent) return;

  setTimeout(() => {
    cookies.classList.add('isOpened');
  }, 500);

  acceptFunctional?.addEventListener('click', () => {
    Cookies.set('user_cookies', 'functional', { expires: 365 });
    cookies.classList.remove('isOpened');
  });

  acceptAll?.addEventListener('click', () => {
    Cookies.set('user_cookies', 'all', { expires: 365 });
    cookies.classList.remove('isOpened');
  });
});

function getUserConsent() {
  const consent = Cookies.get('user_cookies');

  if (consent === 'all') {
    console.log(consent);
  } else if (consent === 'functional') {
    console.log(consent);
  }
}
