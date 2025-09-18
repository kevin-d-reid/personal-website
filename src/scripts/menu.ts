document.querySelector<HTMLElement>('.hamburger')!.addEventListener('click', () => {
  document.querySelector<HTMLElement>('.nav-links')!.classList.toggle('expanded');
});