//changing scroll
var windowScrollY = window.scrollY;
const scrollThreshold = 50;
const navbar = document.querySelector("#navbar");
const stylesAtTop = {
  boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)"
};

const stylesNotAtTop = {
  boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
};

window.addEventListener("scroll", event => setNavbarShadow(windowScrollY));

function setNavbarShadow(windowScroll) {
  if (
    this.window.scrollY > scrollThreshold &&
    windowScroll <= scrollThreshold
  ) {
    navbar.style.boxShadow = stylesNotAtTop.boxShadow;
  } else if (
    this.window.scrollY < scrollThreshold &&
    windowScroll >= scrollThreshold
  ) {
    navbar.style.boxShadow = stylesAtTop.boxShadow;
  }
  windowScrollY = this.window.scrollY;
}
setNavbarShadow(0);

//changing showcase text
const iAmNoun = document.querySelector("#iAmNoun");
const nouns = ["high school student", "swimmer", "developer", "problem solver"];
var index = 0;

setInterval(() => {
  iAmNoun.innerHTML = nouns[index];

  index++;
  if (index == nouns.length) {
    index = 0;
  }
}, 1000);
