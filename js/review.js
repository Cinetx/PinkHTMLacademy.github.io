
var reviewRadio1 = document.querySelector(".review-radiobutton--1");
var reviewRadio2 = document.querySelector(".review-radiobutton--2");
var reviewRadio3 = document.querySelector(".review-radiobutton--3");

var reviewSlide1 = document.querySelector(".review__wrapper--1");
var reviewSlide2 = document.querySelector(".review__wrapper--2");
var reviewSlide3 = document.querySelector(".review__wrapper--3");






reviewRadio1.addEventListener("click", function(evt){
  reviewSlide1.classList.add("review--show");
  reviewSlide1.classList.remove("review--hidden");
  reviewSlide2.classList.remove("review--show");
  reviewSlide2.classList.add("review--hidden");
  reviewSlide3.classList.remove("review--show");
  reviewSlide3.classList.add("review--hidden");

});

reviewRadio2.addEventListener("click", function(evt){

  reviewSlide1.classList.remove("review--show");
  reviewSlide1.classList.add("review--hidden");
  reviewSlide2.classList.remove("review--hidden");
  reviewSlide2.classList.add("review--show");
  reviewSlide3.classList.remove("review--show");
  reviewSlide3.classList.add("review--hidden");


});

reviewRadio3.addEventListener("click", function(evt){

  reviewSlide1.classList.remove("review--show");
  reviewSlide1.classList.add("review--hidden");
  reviewSlide2.classList.add("review--hidden");
  reviewSlide2.classList.remove("review--show");
  reviewSlide3.classList.add("review--show");
  reviewSlide3.classList.remove("review--hidden");

});
