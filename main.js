'use strict';

const openMenu = document.querySelector('.menu_open');
const closeMenu = document.querySelector('.menu_close');
const menuBar = document.querySelector('.nav_menu_bg');
const navFt = document.querySelectorAll('.features');
const navCom = document.querySelectorAll('.company');
const ftDrop = document.querySelector('.features_drop');
const ftArrowUp = document.querySelector('.features_arrow_up');
const comArrowUp = document.querySelector('.company_arrow_up');
const comDrop = document.querySelector('.company_drop');
const navContainer = document.querySelector('.nav_container');

// Navigation menu

openMenu.addEventListener('click', function () {
  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
  menuBar.style.opacity = 100;
});

closeMenu.addEventListener('click', function () {
  openMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('hidden');
  menuBar.style.opacity = 0;
});

navFt.forEach((features) => {
  features.addEventListener('click', function () {
    ftDrop.classList.toggle('hidden');
    if (!ftDrop.classList.contains('hidden')) {
      ftArrowUp.src = 'images/icon-arrow-up.svg';
    } else ftArrowUp.src = 'images/icon-arrow-down.svg';
  });
});

navCom.forEach((company) => {
  company.addEventListener('click', function () {
    comDrop.classList.toggle('hidden');
    if (!comDrop.classList.contains('hidden')) {
      comArrowUp.src = 'images/icon-arrow-up.svg';
    } else comArrowUp.src = 'images/icon-arrow-down.svg';
  });
});
