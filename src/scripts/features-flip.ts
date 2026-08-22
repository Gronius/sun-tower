export function initFeaturesFlip(): void {
  const cards =
    document.querySelectorAll<HTMLElement>(
      "[data-feature-card]"
    );

  if (!cards.length) {
    return;
  }

  const isTouchDevice =
    window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;

  if (!isTouchDevice) {
    return;
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const isFlipped =
        card.classList.contains("is-flipped");

      /*
       * Закриваємо інші відкриті картки.
       */
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove(
            "is-flipped"
          );
        }
      });

      /*
       * Перемикаємо поточну картку.
       */
      if (isFlipped) {
        card.classList.remove(
          "is-flipped"
        );
      } else {
        card.classList.add(
          "is-flipped"
        );
      }
    });
  });
}

initFeaturesFlip();