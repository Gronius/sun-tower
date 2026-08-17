export function initFinderSelection(): void {
  const resultsList =
    document.querySelector<HTMLElement>(
      ".finder__results-list"
    );

  if (!resultsList) {
    return;
  }

  resultsList.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    const button =
      target.closest<HTMLButtonElement>(
        "[data-apartment-id]"
      );

    if (!button) {
      return;
    }

    const apartmentId = Number(
      button.dataset.apartmentId
    );

    if (!apartmentId) {
      return;
    }

    console.log(
      "Finder selected apartment:",
      apartmentId
    );

    window.dispatchEvent(
      new CustomEvent("apartment:selected", {
        detail: {
          apartmentId,
        },
      })
    );
  });
}