const nav = document.querySelector(".navigation");
const navl = document.querySelector(".navigation__list");
const burger = document.querySelector(".navigation__burger");
const navLinks = document.querySelectorAll(".navigation__list li");
const burgerLines = document.querySelectorAll(".navigation__burger div");
let intFrameHeight = window.innerHeight - 100;
//when the screen is not on the header chang background color
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= intFrameHeight) {
    nav.classList.add("scrolled");
    burgerLines.forEach((line) => {
      line.style.backgroundColor = "white";
    });
  } else {
    nav.classList.remove("scrolled");
    burgerLines.forEach((line) => {
      line.style.backgroundColor = "black";
    });
  }
});
//nav
const navSlide = () => {
  burger.addEventListener("click", () => {
    navl.classList.toggle("navigation-active");
    navl.classList.toggle("scrolled");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    nav.classList.add("scrolled");
    burgerLines.forEach((line) => {
      line.style.backgroundColor = "white";
    });
    burger.classList.toggle("toggle");
  });
};
navSlide();
