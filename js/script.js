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

//------------CHECKOUT STEPS------------//

const btn = document.querySelectorAll(".checkout-step");
const view = document.querySelectorAll(".checkout-view");
const nextStep = document.querySelector(".next-step");

function hideView(array) {
  Array.from(array).forEach((el) => {
    el.classList.remove("show");
  });
}

function showView(id, e) {
  hideView(view);
  document.getElementById(id).classList.add("show");
}

Array.from(btn).forEach((el) => {
  el.addEventListener("click", function (e) {
    const id = this.getAttribute("data-toggle");
    const activTab = document.querySelector(".checkout-step.active");
    const activId = activTab.getAttribute("data-toggle");
    if (Number(id) < Number(activId) || this.classList.contains("active")) {
      showView(id);
      this.classList.add("active");
      this.classList.add("show");
    }
  });
});

//------------DONATION BTN----------//

const donbtn = document.querySelectorAll(".donation-btn");

donbtn.forEach((n) => n.addEventListener("click", changeColor));

function changeColor() {
  donbtn.forEach((el) => el.classList.remove("active"));
  this.classList.add("active");
}

//--------------PAGE CHANGER-----------//

const chview = document.querySelectorAll(".checkout-view");

chview.forEach((el) => {
  el.addEventListener("submit", function (e) {
    e.preventDefault();
    const id = el.getAttribute("id");
    const link = document.querySelector(`.checkout-step[data-toggle="${id}"]`);
    link.setAttribute("data-completed", 1);
    link.nextElementSibling.classList.add("active");
    link.classList.remove("active");
    const newId = link.nextElementSibling.getAttribute("data-toggle");
    showView(newId);
  });
});
