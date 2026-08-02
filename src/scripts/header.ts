export function initHeader(): void {
  const header = document.querySelector<HTMLElement>(".header");

  if (!header) return;

  const toggleHeader = (): void => {
    if (window.scrollY > 30) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  toggleHeader();

  window.addEventListener("scroll", toggleHeader);
}

// export function initHeader(): void {
//   console.log("Header initialized");

//   const header = document.querySelector<HTMLElement>(".header");

//   console.log(header);
// }