export function initBackToTop(): void {
  const backToTop = document.querySelector<HTMLElement>(".footer__top-link");

  if (!backToTop) return;

  const toggleVisibility = (): void => {
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  };

  toggleVisibility();

  window.addEventListener("scroll", toggleVisibility, { passive: true });
}



