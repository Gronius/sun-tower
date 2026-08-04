import { apartments } from "@data/apartments";

import { fillApartmentModal } from "./modal/apartment-modal";



export function initModal(): void {
  const modal = document.getElementById("modal");

  if (!modal) return;

  const modalElement = modal;

  const closeButton =
    modal.querySelector<HTMLButtonElement>(".modal__close");

  const overlay =
    modal.querySelector<HTMLElement>(".modal__overlay");

  //   const testButton =
  // document.getElementById("test-modal");

  const modalTriggers =
  document.querySelectorAll<HTMLElement>("[data-modal-open]");

function openModal() {
  modalElement.classList.add("is-open");
  modalElement.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal() {
  modalElement.classList.remove("is-open");
  modalElement.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

  closeButton?.addEventListener("click", closeModal);

  overlay?.addEventListener("click", closeModal);

  // testButton?.addEventListener("click", openModal);


  modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();

    const apartmentId = Number(
      trigger.dataset.apartmentId
    );

    const apartment = apartments.find(
      (item) => item.id === apartmentId
    );

    if (!apartment) return;

  fillApartmentModal(apartment);

  

    // console.log(apartment);

    openModal();
  });
});

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}