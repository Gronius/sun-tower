import { apartments } from "@data/apartments";

export function populateFinderFilters(): void {
  populateFloors();
  populateSections();
  populateAreas();
}

function populateFloors(): void {
  const select =
    document.querySelector<HTMLSelectElement>("#floor");

  if (!select) return;

  const floors = [
    ...new Set(apartments.map((item) => item.floor)),
  ].sort((a, b) => a - b);

  floors.forEach((floor) => {
    const option = document.createElement("option");

    option.value = floor.toString();
    option.textContent = `${floor} поверх`;

    select.append(option);
  });
}

function populateSections(): void {
  const select =
    document.querySelector<HTMLSelectElement>("#section");

  if (!select) return;

  const sections = [
    ...new Set(apartments.map((item) => item.section)),
  ].sort();

  sections.forEach((section) => {
    const option = document.createElement("option");

    option.value = section.toString();
    option.textContent = `Секція ${section}`;

    select.append(option);
  });
}

function populateAreas(): void {
  const select =
    document.querySelector<HTMLSelectElement>("#area");

  if (!select) return;

  const ranges = [
    { label: "до 50 м²", value: "50" },
    { label: "50–70 м²", value: "70" },
    { label: "70–90 м²", value: "90" },
    { label: "90+ м²", value: "91" },
  ];

  ranges.forEach((range) => {
    const option = document.createElement("option");

    option.value = range.value;
    option.textContent = range.label;

    select.append(option);
  });
}