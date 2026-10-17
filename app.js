'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.menu-symbol').textContent = '＋';
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.querySelector('.menu-symbol').textContent = expanded ? '−' : '＋';
  navigation.classList.toggle('is-open', expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const dialog = document.querySelector('#media-dialog');
const mediaContent = document.querySelector('#media-content');
const mediaTitle = document.querySelector('#media-title');
const mediaCaption = document.querySelector('#media-caption');
let previousFocus;
function openMedia(title) {
  previousFocus = document.activeElement;
  mediaTitle.textContent = title;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}
function cleanMedia() {
  mediaContent.replaceChildren();
  mediaCaption.textContent = '';
  document.body.classList.remove('dialog-open');
  previousFocus?.focus({ preventScroll: true });
}
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', cleanMedia);
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    if (typeof dialog.showModal !== 'function') {
      window.open(button.dataset.photo, '_blank', 'noopener');
      return;
    }
    const image = document.createElement('img');
    image.src = button.dataset.photo;
    image.alt = button.querySelector('img').alt;
    mediaContent.replaceChildren(image);
    mediaCaption.textContent = button.dataset.caption || '';
    openMedia('A moment of magic');
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
