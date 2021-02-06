let nav = document.querySelector(".navigation");
let intFrameHeight = window.innerHeight - 100;

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  if (scroll >= intFrameHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
