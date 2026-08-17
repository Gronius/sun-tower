import { apartments } from "@data/apartments";

import { fillApartmentModal } from "./modal/apartment-modal";

export function openModal(): void {
  const modal = document.getElementById("modal");

  if (!modal) {
    return;
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
  // document.documentElement.classList.add("modal-open");
  
}

export function closeModal(): void {
  const modal = document.getElementById("modal");

  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
  // document.documentElement.classList.remove("modal-open");
}

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

  
    openModal();
  });
});

 
  document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  const lightbox = document.querySelector(
    ".plan-lightbox.is-open"
  );

  if (lightbox) {
    return;
  }

  closeModal();
});
}