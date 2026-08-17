import type { Apartment } from "@data/types";

export function fillApartmentModal(
  apartment: Apartment
): void {
  const number =
    document.getElementById("modal-apartment-number");

  const status =
    document.getElementById("modal-apartment-status");

  const rooms =
    document.getElementById("modal-apartment-rooms");

  const area =
    document.getElementById("modal-apartment-area");

  const floor =
    document.getElementById("modal-apartment-floor");

  const section =
    document.getElementById("modal-apartment-section");

  const price =
    document.getElementById("modal-apartment-price");

  const plan =
    document.getElementById(
      "modal-apartment-plan"
    ) as HTMLImageElement | null;

  if (
    !number ||
    !status ||
    !rooms ||
    !area ||
    !floor ||
    !section ||
    !price ||
    !plan
  ) {
    return;
  }

  number.textContent = apartment.number;

  status.textContent =
    apartment.status === "free"
      ? "Вільна"
      : apartment.status === "reserved"
        ? "Заброньована"
        : "Продана";

  rooms.textContent =
    `${apartment.rooms} кімнати`;

  area.textContent =
    `${apartment.area} м²`;

  floor.textContent =
    `${apartment.floor} поверх`;

  section.textContent =
    ` ${apartment.section}`;

  price.textContent =
    `${apartment.price.toLocaleString("uk-UA")} €`;

  plan.src = apartment.plan;
  plan.alt =
    `Планування квартири ${apartment.number}`;

  const hiddenInput =
    document.querySelector<HTMLInputElement>(
      'input[name="selectedApartment"]'
    );

  if (hiddenInput) {
    hiddenInput.value = apartment.number;
  }

  const apartmentId =
    document.querySelector<HTMLInputElement>(
      'input[name="apartmentId"]'
    );

  if (apartmentId) {
    apartmentId.value =
      String(apartment.id);
  }
}