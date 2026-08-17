# ROADMAP.md

# SUN TOWER — Development Roadmap

## Project

Modern Landing Page for a residential complex.

**Stack**

- Astro
- TypeScript
- SCSS
- Vanilla JS
- Component architecture
- BEM

---

# Completed

## Base

- Astro project initialized
- SCSS architecture
- Components architecture
- Layouts
- Data folder
- Scripts folder
- Aliases configured

---

## Finder

Implemented:

- filter by rooms
- filter by section
- filter by floor
- filter by area

Result cards generated dynamically.

Empty state implemented.

Reset button works.

Dynamic floor selector generated from apartments.ts.

---

## Apartments

Apartment interface:

- id
- number
- section
- floor
- rooms
- area
- status
- plan

Apartment modal is filled dynamically.

---

## Modal

Implemented:

- open
- close
- ESC close
- backdrop close
- focus return

Lead form receives selected apartment automatically.

---

## Floor Schemes

Implemented:

- FloorSelector
- FloorSchemeCanvas
- floor-schemes.ts
- floor-schemes-controller.ts

SVG floor loading works.

Switching between floors works.

Clicking apartments opens Apartment Modal.

Demo floors:

- Floor 3
- Floor 4

---

# Current State

Everything below works:

Finder

↓

Floor selector

↓

SVG floor loading

↓

Apartment click

↓

Apartment modal

↓

Lead form

No console errors.

Current implementation is considered stable.

---

# Important Design Decision

After discussion we decided NOT to continue improving the current FloorSchemes implementation.

Instead the project will evolve into a complete Interactive Map module.

Architecture will be redesigned before adding new functionality.

---

# Planned Architecture

InteractiveMap

├── BuildingMap

├── FloorMap

├── ApartmentModal

├── Tooltip

├── BuildingController

├── FloorController

└── ApartmentController

---

# Final UX

## Level 1

Building Map

Hover floor

↓

Tooltip

Section A

Floor 3

Click

↓

Open Floor SVG

---

## Level 2

Floor SVG

Hover apartment

↓

Tooltip

Apartment number

Area

Rooms

Status

Click

↓

Apartment Modal

---

## Level 3

Apartment Modal

Apartment information

Gallery

Floor plan

Lead form

---

# SVG Strategy

Building

↓

Each floor is an individual SVG file.

Example:

public/

floors/

section-a/

floor-01.svg

floor-02.svg

...

floor-15.svg

section-b/

floor-01.svg

...

Each apartment should be represented by polygon shapes (preferred over rect).

Structure example:

<polygon
    id="A301"
    data-apartment-id="1"
    data-tooltip="A-301"
/>

This approach is based on the previously implemented Land Plots project, which proved to be successful.

---

# Next Tasks

1.

Design the architecture of the Interactive Map module.

(No coding yet.)

2.

Create Building SVG.

3.

Implement hover for floors.

4.

Implement floor tooltip.

5.

Open Floor SVG.

6.

Implement apartment hover.

7.

Apartment tooltip.

8.

Apartment colors based on status.

9.

Apartment modal.

10.

Replace demo SVGs with real ones when available.

---

# Notes

Current demo uses only two floors.
Floor plans are temporary.
Real apartment plans and SVGs will be substituted later without changing the architecture.
Current objective:
Build a reusable template suitable for future residential projects.



"https://profinexgroup.sk/wp-content/uploads/2026/02/SUN-TOWER-web-2.2-2-2.mp4" 