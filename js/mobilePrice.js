var priceRadio1 = document.querySelector('.price-radiobutton--1');
var priceRadio2 = document.querySelector('.price-radiobutton--2');
var priceRadio3 = document.querySelector('.price-radiobutton--3');
var priceTablet = document.querySelector('.price__tablet');

// priceRadio1.addEventListener('click', function {
//   priceTablet.classList.add('price__tablet__transform--1');
// });

priceRadio1.addEventListener("click", function (evt) {
priceTablet.classList.add("price__tablet__transform--1");
priceTablet.classList.remove("price__tablet__transform--2");
priceTablet.classList.remove("price__tablet__transform--3");
});

priceRadio2.addEventListener("click", function (evt) {
priceTablet.classList.add("price__tablet__transform--2");
priceTablet.classList.remove("price__tablet__transform--1");
priceTablet.classList.remove("price__tablet__transform--3");
});

priceRadio3.addEventListener("click", function (evt) {
priceTablet.classList.add("price__tablet__transform--3");
priceTablet.classList.remove("price__tablet__transform--2");
priceTablet.classList.remove("price__tablet__transform--1");
});
//Найти радио
// найти таблицу
// По клику на радио к таблице добовлялся класс
