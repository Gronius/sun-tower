
src/
└── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
├── components/

│   └── ui/
│       └── Modal.astro
│   │   └── Button.astro
│   │
│   ├── common/
│   │   ├── Logo.astro
│   │   └── Navigation.astro
│   │   └── SectionHeading.astro
│   │
│   └── sections/
│       ├── About.astro
│       ├── Apartments.astro
│       ├── CallToAction.astro
│       └── Features.astro
│       └── Finder.astro
│       └── FloorPlans.astro
│       └── Footer.astro
│       ├── Gallery.astro
│       ├── Header.astro
│       ├── Hero.astro
│       ├── Location.astro
│
├── data/
│   ├── about.ts
│   ├── apartments.ts
│   ├── complex.ts
│   ├── cta.ts
│   ├── features.ts
│   ├── floor-plans.ts
│   ├── gallery.ts
│   ├── hero.ts
│   ├── location.ts
    └── navigation.ts
    └── site.ts
├── layouts/
│       ├── BaseLayout.astro
├── pages/
│       ├── index.astro

├── scripts/
    ├── modal/
        └── apartment-modal.ts    
│   ├── modal.ts
│   ├── finder.ts
│   ├── main.ts
    ├── header.ts
    ├── navigation.ts
    ├── scroll.ts
    ├── back-to-top.ts
    ├── filters/
        └── filter-apartments.ts
    └── render/
        └── apartment-card.ts        

    └── utils/
        └── debounce.ts
        └── throttle.ts

├── styles/
│   ├── abstracts/
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── _index.scss
│
│   ├──base/
│       ├── _reset.scss
│       ├── _typography.scss
│       ├── _container.scss
│       ├── _root.scss
│       ├── _base.scss
│       └── _index.scss
│
│   └── components/
│       └── _modal.scss
│       ├── _button.scss
│       ├── _lead-form.scss
│       ├── _logo.scss
│       ├── _navigation.scss
│       └── _index.scss
│
│   ├──sections/
│       ├── _apartments.scss
│       ├── _about.scss
│       ├── _cta.scss
│       ├── _cta.scss
│       ├── _features.scss
│       ├── _finder.scss
│       ├── _floor-plans.scss
│       ├── _footer.scss
│       ├── _gallery.scss
│       ├── _header.scss
│       ├── _hero.scss
│       ├── _location.scss
│       └── _index.scss
│
│   ├── global.scss

## JavaScript

Усі клієнтські модулі підключаються лише через один вхідний файл:

src/scripts/main.ts

BaseLayout.astro

<script type="module">
  import "@scripts/main";
</script>

Ніякі інші скрипти напряму в секціях не підключаються.