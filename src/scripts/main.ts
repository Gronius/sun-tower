import { initHeader } from "./header";
import { initNavigation } from "./navigation";
import { initScroll } from "./scroll";
import { initBackToTop } from "./back-to-top";
import { initFinder } from "./finder";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initNavigation();
  initScroll();
  initBackToTop();
  initFinder();
});