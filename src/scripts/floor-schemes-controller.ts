
import { floors } from "@data/floors";
import { floorSchemes } from "@data/floor-schemes";
import { apartments } from "@data/apartments";

import { fillApartmentModal } from "./modal/apartment-modal";
import { openModal } from "./modal";

const apartmentColors = {
  free: "#D9F7BE",
  reserved: "#FFF1B8",
  sold: "#F5F5F5",
} as const;

const statusLabels = {
  free: "Вільна",
  reserved: "Зарезервована",
  sold: "Продана",
} as const;


/* * Знаходимо квартири конкретного поверху */
function getFloorApartments(
  section: "A" | "B",
  floor: number
  ) {
    return apartments.filter(
      (apartment) =>
        apartment.section === section &&
        apartment.floor === floor
    );
  }

/* * Прив'язуємо квартири до SVG-позицій */
    function bindApartments(
      section: "A" | "B",
      floor: number
    ): void {

    const items = document.querySelectorAll<SVGElement>(
      "[data-apartment-position]"
    );

    const tooltip = document.querySelector<HTMLElement>(
      "[data-apartment-tooltip]"
    );

    const floorScheme = document.querySelector<HTMLElement>(
      ".floor-scheme"
    );

    if (!tooltip || !floorScheme) {
      console.warn(
        "Apartment tooltip or floor scheme not found"
      );

      return;
    }
     const floorApartments = getFloorApartments( section, floor );
    // added 
    const isTouchDevice =
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

let activeTouchApartment: number | null = null;

      //  Проходимо по позиціях квартир у SVG   */
    items.forEach((item) => {
      const position = Number(
        item.getAttribute("data-apartment-position")
      );

      if (!position) {
        return;
      }
      const apartment =
        floorApartments[position - 1];

      if (!apartment) {
        console.warn(
          `Apartment position ${position} not found for ${section}-${floor}`
        );

        return;
      }

  const fillColor = apartmentColors[apartment.status];

item.setAttribute("fill", fillColor);

  if (apartment.status === "free") {
    item.classList.add("is-available");
    item.style.cursor = "pointer";

    if (!isTouchDevice) {
      item.addEventListener("click", () => {
        fillApartmentModal(apartment);
        openModal();

      });
    }
  } else {
  item.style.cursor = "default";
  }

//     /*      * TOOLTIP      */
    item.addEventListener("mouseenter", () => {
        const apartmentLabel =
          `${apartment.number}.${apartment.floor}`;

        tooltip.innerHTML = `
          <div class="floor-scheme__tooltip-number">
            ${apartmentLabel}
          </div>

         <div class="floor-scheme__tooltip-status">
            ${statusLabels[apartment.status]}
          </div>
          ${ apartment.status === "free"
              ? `
                <div class="floor-scheme__tooltip-info">
                  <span>${apartment.rooms} кімнати</span>
                  <span>${apartment.area} м²</span>
                  <span>${apartment.price.toLocaleString("uk-UA")} €</span>
                </div>
              `
              : ""
          }
        `;
//      Передаємо статус tooltip          */
        tooltip.dataset.status =  apartment.status;
        tooltip.classList.add("is-visible");
        tooltip.setAttribute("aria-hidden", "false" );
      }
    );

//    TOOLTIP POSITION      */
       item.addEventListener("mousemove", (event) => {
        const schemeRect = floorScheme.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const gap = 14;

        let left =
          event.clientX -
          schemeRect.left +
          gap;

        let top =
          event.clientY -
          schemeRect.top +
          gap;

//        Правий край          */
        if (
          left + tooltipRect.width >
          schemeRect.width
        ) {

        left =
            event.clientX -
            schemeRect.left -
            tooltipRect.width -
            gap;
        }
//         /*          * Нижній край          */
        if (
          top + tooltipRect.height >
          schemeRect.height
        ) {
          top =
            event.clientY -
            schemeRect.top -
            tooltipRect.height -
            gap;

        }

//    Захист від лівого / верхнього краю          */
        left = Math.max(0, left);
        top = Math.max(0, top);

        tooltip.style.left =
          `${left}px`;

        tooltip.style.top =
          `${top}px`;

      } );

//     HIDE TOOLTIP     */
    item.addEventListener( "mouseleave", () => {
        tooltip.classList.remove("is-visible");
        tooltip.setAttribute("aria-hidden", "true");
      });
//Додаємо touch handler
if (isTouchDevice) {
  item.addEventListener("click", (event) => {
    event.stopPropagation();

    if (activeTouchApartment === apartment.id) {
      if (apartment.status === "free") {
        fillApartmentModal(apartment);
        openModal();

        console.log(
          "Selected apartment:",
          apartment
        );
      }

      activeTouchApartment = null;

      return;
    }

    activeTouchApartment = apartment.id;

    const apartmentLabel =
      `${apartment.number}.${apartment.floor}`;

    tooltip.innerHTML = `
      <div class="floor-scheme__tooltip-number">
        ${apartmentLabel}
      </div>

      <div class="floor-scheme__tooltip-status">
        ${statusLabels[apartment.status]}
      </div>

      ${
        apartment.status === "free"
          ? `
            <div class="floor-scheme__tooltip-info">
              <span>${apartment.rooms} кімнати</span>
              <span>${apartment.area} м²</span>
              <span>${apartment.price.toLocaleString("uk-UA")} €</span>
            </div>
          `
          : ""
      }
    `;

    tooltip.dataset.status = apartment.status;

    tooltip.classList.add("is-visible");
    tooltip.setAttribute("aria-hidden", "false");

    // Для touch tooltip позиціонуємо
    // біля самої квартири.
    const itemRect = item.getBoundingClientRect();
    const schemeRect = floorScheme.getBoundingClientRect();

    const gap = 14;

    let left =
      itemRect.left -
      schemeRect.left +
      itemRect.width / 2;

    let top =
      itemRect.top -
      schemeRect.top -
      gap;

    const tooltipRect =
      tooltip.getBoundingClientRect();

    if (left + tooltipRect.width > schemeRect.width) {
      left = schemeRect.width - tooltipRect.width;
    }

    if (left < 0) {
      left = 0;
    }

    if (top - tooltipRect.height < 0) {
      top =
        itemRect.bottom -
        schemeRect.top +
        gap;
    } else {
      top -= tooltipRect.height;
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
  });
}

// end touch handler
  });
}

// end функціs bindApartments()

function selectApartmentFromFinder(
  apartmentId: number
): void {
  const apartment = apartments.find(
    (item) => item.id === apartmentId
  );

  if (!apartment) {
    console.warn(
      `Apartment not found: ${apartmentId}`
    );
    return;
  }

  const floorApartments = getFloorApartments(
    apartment.section,
    apartment.floor
  );

  const position =
    floorApartments.findIndex(
      (item) => item.id === apartmentId
    ) + 1;

  if (!position) {
    console.warn(
      `Apartment position not found: ${apartment.number}`
    );
    return;
  }

  const item =
    document.querySelector<SVGElement>(
      `[data-apartment-position="${position}"]`
    );

  if (!item) {
    console.warn(
      `SVG position not found: ${position}`
    );
    return;
  }

  /*   * Візуально позначаємо квартиру,   * яку вибрав Finder.   */

document
  .querySelectorAll<SVGElement>(
    "[data-apartment-position].is-selected"
  )
  .forEach((element) => {
    element.classList.remove("is-selected");
  });

item.classList.add("is-selected");

if (apartment.status === "free") {
  fillApartmentModal(apartment);
  openModal();
}

  /*   * Для free відкриваємо Apartment Details.   * reserved / sold залишаються без modal,
   * відповідно до існуючої логіки.   */
  if (apartment.status === "free") {
    fillApartmentModal(apartment);
    openModal();
  }
}

/*  * Завантаження SVG  */
async function loadFloorSvg(
  svgPath: string,
  section: "A" | "B",
  floor: number,
  apartmentId?: number
): Promise<void> {

  const container =
    document.querySelector<HTMLElement>(
      "[data-floor-container]"
    );
 
  if (!container) {
    return;
  }
  try {

    const response =
      await fetch(svgPath);

    if (!response.ok) {
      throw new Error(
        "Не вдалося завантажити SVG"
      );
    }

    const svg =
      await response.text();

    container.innerHTML = svg;


//  Після завантаження SVG прив'язуємо квартири саме поточного поверху  */
bindApartments(
  section,
  floor
);

if (apartmentId !== undefined) {
  selectApartmentFromFinder(apartmentId);
}

  } catch (error) {

    console.error(error);

  }
}

/*  * Головний контролер  */
export function initFloorSchemes(): void {

  let activeFloor: {
  section: "A" | "B";
  floor: number;
} | null = null;

  window.addEventListener(
    "floor:selected",
    (event) => {
      const customEvent =
        event as CustomEvent<{
          section: "A" | "B";
          floor: number;
          apartmentId?: number;
        }>;
      const {
        section,
        floor,
        apartmentId,
      } = customEvent.detail;
  // додати перевірку
      // Повторний клік по вже відкритому поверху
      if (
        activeFloor &&
        activeFloor.section === section &&
        activeFloor.floor === floor
      ) {
        const container =
          document.querySelector<HTMLElement>(
            "[data-floor-container]"
          );
        const tooltip =
          document.querySelector<HTMLElement>(
            "[data-apartment-tooltip]"
          );
        if (container) {
          container.innerHTML = "";
        }
        if (tooltip) {
          tooltip.classList.remove("is-visible");
          tooltip.setAttribute(
            "aria-hidden",
            "true"
          );
        }
        activeFloor = null;
        return;
      }
//       /*        * Знаходимо поверх       */
      const floorData =
        floors.find(
          (item) =>
            item.section === section &&
            item.floor === floor
        );
      if (!floorData) {
        console.warn(
          `Floor not found: ${section}-${floor}`
        );
        return;
      }
//       /*       * Знаходимо тип схеми       */
      const scheme =
        floorSchemes.find(
          (item) =>
            item.id === floorData.schemeId
        );
      if (!scheme) {
        console.warn(
          `Scheme not found: ${floorData.schemeId}`
        );
        return;
      }
      // Запам'ятовуємо активний поверх
      activeFloor = {
        section,
        floor,
      };
//   Завантажуємо типовий SVG,  але передаємо section + floor    */
      void loadFloorSvg(
        scheme.svg,
        section,
        floor,
        apartmentId
      );

    }
  );

}