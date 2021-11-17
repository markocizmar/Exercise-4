//---------BURGER MENU----------//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

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

let test = document.getElementById("open-submenu");
let go = document.getElementById("opened-submenu");
let sub = document.querySelector(".expandable");

test.addEventListener("mouseover", function (event) {
  go.classList.add("active");
  sub.classList.add("active");
});
test.addEventListener("mouseleave", function (event) {
  go.classList.remove("active");
  sub.classList.remove("active");
});
