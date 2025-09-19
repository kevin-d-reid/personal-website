const elemBurger = document.querySelector<HTMLDivElement>(".hamburger");
const elemNav = document.querySelector<HTMLElement>(".nav-links");
if (!elemBurger || !elemNav) {
  throw new ReferenceError("Required element not found.");
}
elemBurger.addEventListener("click", () => {
  elemNav.classList.toggle("expanded");
});