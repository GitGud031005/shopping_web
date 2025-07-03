const header    = document.querySelector('.upper-header');
const threshold = 30;  // px scrolled before shrinking

window.addEventListener('scroll', () => {
  header.classList.toggle('shrink', window.scrollY > threshold);
}, { passive: true });
