import scrollToElement from 'scroll-to-element';

const anchorLinks = document.querySelectorAll('.anchor-links li > a, .anchor');

anchorLinks?.forEach(link => {
  link.addEventListener('click', event => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const href = link.getAttribute('href');

    if (href.startsWith('#') && href !== '#') {
      event.preventDefault();

      const targetElement = document.querySelector(href);

      if (targetElement) {
        scrollToElement(targetElement, {
          offset: -headerHeight,
          ease: 'inOutQuint',
          duration: 1000,
        });
      } else {
        // const lang = document.documentElement.lang || 'en';
        // const anchor = href; // наприклад, "#section1"

        // if (lang === 'en') {
        //   window.location.href = `undex.html${anchor}`;
        // } else {
        //   window.location.href = `/${lang}.html${anchor}`;
        // }
      }
    }
  });
});
