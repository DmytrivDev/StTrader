const moreBlock = document.querySelectorAll('.more-block');

moreBlock.forEach(block => {
  if (!block) return;

  const addMore = block.querySelector('.addMore');
  addMore?.addEventListener('click', () => {
    if (block) {
      addMore.style.display = 'none';
      block.classList.add('isOpened');

      setTimeout(() => {
        block.classList.add('isAnim');
      }, 100);
    }
  });
});
