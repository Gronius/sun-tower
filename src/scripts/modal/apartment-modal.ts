
import type { Apartment } from "@data/apartments";

export function fillApartmentModal(apartment: Apartment): void {
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

  if (
    !number ||
    !status ||
    !rooms ||
    !area ||
    !floor ||
    !section
  ) {
    return;
  }

  number.textContent = apartment.number;

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
  apartmentId.value = String(apartment.id);
}

  status.textContent = apartment.status;

  rooms.textContent = `${apartment.rooms} кімнати`;

  area.textContent = `${apartment.area} м²`;

  floor.textContent = `${apartment.floor} поверх`;

  section.textContent = `Секція ${apartment.section}`;
}