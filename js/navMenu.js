var button = document.querySelector('.main-nav__toggle');
var menu = document.querySelector ('.nav-menu');
var menuWrapper = document.querySelector('.pink-navigation');
var toggleOpen = document.querySelector('.toggle__open');
var toggleClose = document.querySelector('.toggle__close');

button.addEventListener("click", function (evt) {
evt.preventDefault();
menu.classList.toggle("nav-menu--open");
menuWrapper.classList.toggle("pink-navigation--show");


toggleOpen.classList.toggle("visually-hidden");
toggleClose.classList.toggle('visually-hidden');

});
