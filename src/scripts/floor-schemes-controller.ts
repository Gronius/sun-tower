import { floorSchemes } from "@data/floor-schemes";
// import { floorSchemes } from "../data/floor-schemes";

export function initFloorSchemes(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    ".floor-selector__button"
  );

  const image = document.querySelector<HTMLImageElement>(
    "[data-floor-image]"
  );

  if (!buttons.length || !image) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const floorId = Number(button.dataset.floorId);

      const scheme = floorSchemes.find(
        (item) => item.id === floorId
      );

      if (!scheme) {
        return;
      }

      buttons.forEach((item) =>
        item.classList.remove("is-active")
      );

      button.classList.add("is-active");

      image.src = scheme.svg;
      image.alt = scheme.title;
    });
  });
}