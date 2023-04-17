const btn = document.querySelector('.header__burger'),
  menu = document.querySelector('.menu__wrapper'),
  html = document.querySelector('html'),
  authBtn = document.querySelectorAll('.header__btns');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btn.classList.toggle('active');
  html.classList.toggle('off-scroll');
  authBtn.forEach((el) => {
    el.classList.toggle('disabled');
  });
});
const listItems = menu.querySelectorAll('.nav__list-item');
listItems.forEach((el) => {
  el.addEventListener('click', () => {
    menu.classList.remove('active');
    btn.classList.remove('active');
    html.classList.remove('off-scroll');
    authBtn.forEach((el) => {
      el.classList.remove('disabled');
    });
  });
});
