import { apartments } from "@data/apartments";

export function initFinderNavigation(): void {

console.log("FINDER NAVIGATION INIT");

  window.addEventListener("apartment:selected", (event) => {
    const customEvent =
      event as CustomEvent<{
        apartmentId: number;
      }>;

    const { apartmentId } = customEvent.detail;

    const apartment = apartments.find(
      (item) => item.id === apartmentId
    );

    if (!apartment) {
      console.warn(
        `Apartment not found: ${apartmentId}`
      );
      return;
    }

    console.log(
      "Navigating to apartment:",
      apartment.number,
      apartment.section,
      apartment.floor
    );

        const buildingMap =
      document.querySelector<HTMLElement>(
        ".building-map"
      );

    if (buildingMap) {
      buildingMap.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }


    window.dispatchEvent(
      new CustomEvent("floor:selected", {
        detail: {
          section: apartment.section,
          floor: apartment.floor,
           apartmentId: apartment.id,
        },
      })
    );
  });
}