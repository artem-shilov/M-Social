const btns = document.querySelectorAll('.btn');
const btnClose = document.querySelectorAll('.btn-close');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const html = document.querySelector('html');

function closeModal() {
  modalOverlay.classList.remove('modal-overlay--visible');
  html.classList.remove('off-scroll');
  modals.forEach((el) => {
    el.classList.remove('modal--visible');
  });
}
btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    html.classList.add('off-scroll');
  });
});

btnClose.forEach((e) => {
  e.addEventListener('click', () => {
    closeModal();
  });
});

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    closeModal();
  }
});
