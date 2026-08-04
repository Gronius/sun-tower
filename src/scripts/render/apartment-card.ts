// import type { Apartment } from "@data/apartments";

// const statusLabels = {
//   available: "Вільна",
//   reserved: "Заброньована",
//   sold: "Продана",
// };

import type {
  Apartment,
  ApartmentStatus,
} from "@data/apartments";

function getStatusClass(status: ApartmentStatus): string {
  switch (status) {
    case "Вільна":
      return "available";

    case "Заброньована":
      return "reserved";

    case "Продана":
      return "sold";
  }
}

export function createApartmentCard(apartment: Apartment): string {
  return `
    <article class="finder-card">

      <div class="finder-card__info">

        <h3 class="finder-card__title">
          ${apartment.number}
        </h3>

      

         <span class="finder-card__status finder-card__status--${getStatusClass(apartment.status)}">
         ${apartment.status}
        </span>

      </div>

      <ul class="finder-card__list">

        <li>${apartment.rooms} кімнати</li>

        <li>${apartment.area} м²</li>

        <li>${apartment.floor} поверх</li>

        <li>Секція ${apartment.section}</li>

      </ul>

      <button
        class="finder-card__button"
        type="button"
        data-apartment-id="${apartment.id}"
      >
        Детальніше
      </button>

    </article>
  `;
}