
import {
  filterApartments,
  type FinderFilters,
} from "./filters/filter-apartments";

import { createApartmentCard } from "./render/apartment-card";

export function initFinder(): void {
  const form = document.querySelector<HTMLFormElement>("#finder-form");

  // const results = document.querySelector<HTMLElement>(".finder__results");

const resultsCount =
  document.querySelector<HTMLElement>(
    ".finder__results-count"
  );

const resultsList =
  document.querySelector<HTMLElement>(
    ".finder__results-list"
  );

  const resetButton =
  document.querySelector<HTMLButtonElement>(
    ".finder__reset"
  );

 
  // if (!form || !results) return;
  if (
  !form ||
  !resultsCount ||
  !resultsList ||
  !resetButton
) {
  return;
}

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    resetButton.addEventListener("click", () => {
  form.reset();

  resultsCount.textContent = "";

  resultsList.innerHTML = "";
});

    const formData = new FormData(form);

    const filters: FinderFilters = {
      rooms: formData.get("rooms")?.toString() ?? "",
      section: formData.get("section")?.toString() ?? "",
      floor: formData.get("floor")?.toString() ?? "",
      area: formData.get("area")?.toString() ?? "",
    };

    const filteredApartments = filterApartments(filters);

    resultsCount.textContent =
  `Знайдено ${filteredApartments.length} квартир`;

  if (filteredApartments.length === 0) {
  resultsCount.textContent = "Знайдено 0 квартир";

  resultsList.innerHTML = `
    <div class="finder-empty">
      <h3>Квартир не знайдено</h3>
      <p>Спробуйте змінити параметри пошуку.</p>
    </div>
  `;

  return;
}

resultsList.innerHTML =
  filteredApartments
    .map(createApartmentCard)
    .join("");

      
  });
}









