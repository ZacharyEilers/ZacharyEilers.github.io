var windowScrollY = window.scrollY;

const scrollThreshold = 50;

const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", event => setNavbarBackground(windowScrollY));

function setNavbarBackground(windowScroll) {
  if (
    this.window.scrollY > scrollThreshold &&
    windowScroll <= scrollThreshold
  ) {
    navbar.style.backgroundColor = "rgba(0, 0 , 0, 0.8)";
  } else if (
    this.window.scrollY < scrollThreshold &&
    windowScroll >= scrollThreshold
  ) {
    navbar.style.backgroundColor = "rgba(0, 0 , 0, 0.2)";
  }
  windowScrollY = this.window.scrollY;
}

setNavbarBackground(0);
