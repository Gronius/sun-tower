
function init() {
  const mapContainer = document.querySelector<HTMLElement>(
    '.building-map'
  );

  const buildingMap = document.querySelector<HTMLElement>(
    '.building-map__overlay'
  );

  const tooltip = document.querySelector<HTMLElement>(
    '.building-map__tooltip'
  );

  if (!mapContainer || !buildingMap || !tooltip) {
    console.warn('Building map: required elements not found');
    return;
  }
  // INLINE SVG — шукаємо полігони прямо в DOM
  const floors = buildingMap.querySelectorAll<SVGElement>(
    '.building-floor'
  );


  if (!floors.length) {
    console.warn('No .building-floor polygons found in inline SVG');
    return;
  }

  floors.forEach((floor) => {
    const section = floor.getAttribute('data-section') ?? '';
    const floorNumber = floor.getAttribute('data-floor') ?? '';

    floor.addEventListener('mouseenter', () => {
      tooltip.innerHTML = `
        <div>Section ${section}</div>
        <div>Floor ${floorNumber}</div>
      `;

      tooltip.style.display = 'block';
      tooltip.style.opacity = '1';
    });
    // Logica Tooltip 

  floor.addEventListener('mousemove', (event) => {
      const mapRect = mapContainer.getBoundingClientRect();

      const cursorX = event.clientX - mapRect.left;
      const cursorY = event.clientY - mapRect.top;

      const tooltipRect = tooltip.getBoundingClientRect();

      tooltip.classList.remove(
    'building-map__tooltip--top',
    'building-map__tooltip--right',
    'building-map__tooltip--left'
    );

  const gap = 12;

  // Відстань від курсора до верхньої межі карти
  const spaceTop = cursorY;

  // Відстань від курсора до правої/лівої межі карти
  const spaceRight = mapRect.width - cursorX;
  const spaceLeft = cursorX;

  // 1. Основний варіант — Tooltip над курсором
  if (spaceTop > tooltipRect.height + gap) {
    tooltip.style.left = `${cursorX}px`;
    tooltip.style.top = `${cursorY - gap}px`;

    tooltip.classList.add(
      'building-map__tooltip--top'
    );
  }
  // 2. Якщо зверху немає місця — праворуч
  else if (spaceRight > tooltipRect.width + gap) {
    tooltip.style.left = `${cursorX + gap}px`;
    tooltip.style.top = `${cursorY}px`;

    tooltip.classList.add(
      'building-map__tooltip--right'
    );
  }
  // 3. Якщо праворуч немає — ліворуч
  else if (spaceLeft > tooltipRect.width + gap) {
    tooltip.style.left = `${cursorX - gap}px`;
    tooltip.style.top = `${cursorY}px`;

    tooltip.classList.add(
      'building-map__tooltip--left'
    );
  }
});

  floor.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
      tooltip.style.display = 'none';
    });

  floor.addEventListener("click", () => {
  const section = floor.getAttribute("data-section");
  const floorNumber = Number(
    floor.getAttribute("data-floor")
  );

  if (!section || !floorNumber) {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("floor:selected", {
      detail: {
        section,
        floor: floorNumber,
      },
    })
  );
});

  });
}

init();






