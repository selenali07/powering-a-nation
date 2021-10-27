const hamburgerIcon = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");

hamburgerIcon.addEventListener("click", openMenu);

function openMenu() {
  hamburgerIcon.classList.toggle("open");
  overlay.classList.toggle("open");
}
