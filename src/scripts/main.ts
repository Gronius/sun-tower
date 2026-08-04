import { initHeader } from "./header";
import { initNavigation } from "./navigation";
import { initScroll } from "./scroll";
import { initBackToTop } from "./back-to-top";
import { initFinder } from "./finder";
import { initModal } from "./modal";
import { initFloorSchemes } from "./floor-schemes-controller";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initNavigation();
  initScroll();
  initBackToTop();
  initFinder();
  initModal()
  initFloorSchemes();
});
