console.log("hi there");
// variable que lee el scroll
let ultimoScrollY = window.scrollY;
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  const scrolActual = window.scrollY;
  if (scrolActual > ultimoScrollY && scrolActual > 80) {
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
  }
  ultimoScrollY = scrolActual;
});
