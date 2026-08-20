import { floorPlans } from "@data/floor-plans";

export function initFloorPlans(): void {
  const section = document.querySelector<HTMLElement>(
    "#floor-plans"
  );

  if (!section) {
    return;
  }

  const roomButtons =
    section.querySelectorAll<HTMLButtonElement>(
      "[data-rooms]"
    );

  const variants =
    section.querySelector<HTMLElement>(
      "[data-floor-plan-variants]"
    );

  const image =
    section.querySelector<HTMLImageElement>(
      "[data-floor-plan-image]"
    );

  const title =
    section.querySelector<HTMLElement>(
      "[data-floor-plan-title]"
    );

  const area =
    section.querySelector<HTMLElement>(
      "[data-floor-plan-area]"
    );

  const description =
    section.querySelector<HTMLElement>(
      "[data-floor-plan-description]"
    );

  if (
    !roomButtons.length ||
    !variants ||
    !image ||
    !title ||
    !area ||
    !description
  ) {
    return;
  }

    const variantsElement = variants;
  const imageElement = image;
  const titleElement = title;
  const areaElement = area;
  const descriptionElement = description;

  let activePlanId = floorPlans[0]?.id ?? null;

  function renderVariants(
    rooms: 1 | 2 | 3 | 4
  ): void {
    const plans = floorPlans.filter(
      (plan) => plan.rooms === rooms
    );

   variantsElement.innerHTML = plans 
      .map(
        (plan) => `
          <button
            class="floor-plans__variant${
              plan.id === activePlanId
                ? " is-active"
                : ""
            }"
            type="button"
            data-plan-id="${plan.id}"
          >
            ${plan.area} м²
          </button>
        `
      )
      .join("");

    const variantButtons =
      variantsElement.querySelectorAll<HTMLButtonElement>( 
        "[data-plan-id]"
      );

    variantButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const planId = Number(
          button.dataset.planId
        );

        const plan = floorPlans.find(
          (item) => item.id === planId
        );

        if (!plan) {
          return;
        }

        activePlanId = plan.id;

        updatePlan(plan);

        variantButtons.forEach((item) => {
          item.classList.toggle(
            "is-active",
            Number(item.dataset.planId) === plan.id
          );
        });
      });
    });
  }

  function updatePlan(
    plan: (typeof floorPlans)[number]
  ): void {
    imageElement.src = plan.image;
    imageElement.alt =
    `${plan.rooms}-кімнатна квартира`;

    titleElement.textContent =
    `${plan.rooms}-кімнатна квартира`;

    areaElement.textContent =
    `${plan.area} м²`;

    descriptionElement.textContent =
    plan.description;
  }

  roomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const rooms = Number(
        button.dataset.rooms
      ) as 1 | 2 | 3 | 4;

      const firstPlan = floorPlans.find(
        (plan) => plan.rooms === rooms
      );

      if (!firstPlan) {
        return;
      }

      activePlanId = firstPlan.id;

      roomButtons.forEach((item) => {
        item.classList.toggle(
          "is-active",
          item === button
        );
      });

      updatePlan(firstPlan);
      renderVariants(rooms);
    });
  });

  // Початковий стан
  const initialPlan = floorPlans[0];

  if (!initialPlan) {
    return;
  }

  activePlanId = initialPlan.id;

  updatePlan(initialPlan);
  renderVariants(initialPlan.rooms);
}