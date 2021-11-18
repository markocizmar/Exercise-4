//---------BURGER MENU----------//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-simple");
const navA = document.querySelectorAll(".submenu-a");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
navA.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//-----------HEADER SWIPER------------//

var headSwiper = new Swiper(".headSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//-----------QUOTE SWIPER---------//

var quoteSwiper = new Swiper(".quoteSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//--------COMMERCIAL SWIPER---------//

var commSwiper = new Swiper(".commSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//--------COMMERCIAL ACCORDION---------//
const aci = document.querySelectorAll(".accordion-item");
const acc = document.querySelectorAll(".accordion-content");

aci.forEach((n) => n.addEventListener("click", openAccordion));

function openAccordion() {
  aci.forEach((el) => el.classList.remove("active"));
  acc.forEach((el) => el.classList.remove("show"));
  this.nextElementSibling.classList.add("show");
  this.classList.add("active");
}
