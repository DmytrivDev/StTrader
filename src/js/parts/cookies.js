document.addEventListener('DOMContentLoaded', () => {
  const cookies = document.querySelector('.cookies');
  const closeBtns = document.querySelectorAll('.btn-def');

  if (!cookies) return;

  setTimeout(() => {
    cookies.classList.add('isOpened');
  }, 500);

  closeBtns?.forEach(btn => {
    btn.addEventListener('click', () => {
      cookies.classList.remove('isOpened');
    });
  });
});
