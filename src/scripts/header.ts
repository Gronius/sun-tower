

export function initHeader(): void {
  const header =
    document.querySelector<HTMLElement>(".header");

  if (!header) {
    return;
  }

  /* ================================
     Header scroll state
  ================================= */

  const toggleHeader = (): void => {
    if (window.scrollY > 30) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  toggleHeader();

  window.addEventListener(
    "scroll",
    toggleHeader
  );

  /* ================================
     Mobile menu
  ================================= */

  const menuToggle =
    header.querySelector<HTMLButtonElement>(
      ".site-header__menu-toggle"
    );

  const mobileMenu =
    header.querySelector<HTMLElement>(
      ".site-header__mobile-menu"
    );

    console.log("HEADER:", header);
console.log("MENU TOGGLE:", menuToggle);
console.log("MOBILE MENU:", mobileMenu);

  if (!menuToggle || !mobileMenu) {
    return;
  }

  const mobileLinks =
    mobileMenu.querySelectorAll<HTMLAnchorElement>(
      ".site-header__mobile-link"
    );

  const openMenu = (): void => {
    header.classList.add("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "true"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Закрити меню"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "mobile-menu-open"
    );
  };

  const closeMenu = (): void => {
    header.classList.remove("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Відкрити меню"
    );

    mobileMenu.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "mobile-menu-open"
    );
  };

  // menuToggle.addEventListener(
  //   "click",
  //   () => {
  //     const isOpen =
  //       header.classList.contains("menu-open");

  //     if (isOpen) {
  //       closeMenu();
  //     } else {
  //       openMenu();
  //     }
  //   }
  // );

  menuToggle.addEventListener(
  "click",
  () => {
    console.log("MOBILE MENU CLICK");

    const isOpen =
      header.classList.contains("menu-open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
);
  /* Close after selecting a navigation item */

  mobileLinks.forEach((link) => {
    link.addEventListener(
      "click",
      closeMenu
    );
  });

  /* Close with Escape */

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        header.classList.contains("menu-open")
      ) {
        closeMenu();
      }
    }
  );
}

