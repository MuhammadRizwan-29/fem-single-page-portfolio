/* Slider */

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".slider--btn.next");
const prev = document.querySelector(".slider--btn.prev");
let curSlide = 0;
const maxSlide = slides.length;

// slider.style.transform = `scale(0.4) translateX(-400px)`;
// slider.style.overflow = "visible";

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
