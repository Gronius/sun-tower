import { apartments } from "@data/apartments";

export interface FinderFilters {
  rooms: string;
  section: string;
  floor: string;
  area: string;
}

export function filterApartments(filters: FinderFilters) {
  return apartments.filter((apartment) => {
    if (
      filters.rooms &&
      apartment.rooms !== Number(filters.rooms)
    ) {
      return false;
    }

    if (
      filters.section &&
      apartment.section !== Number(filters.section)
    ) {
      return false;
    }

    if (
      filters.floor &&
      apartment.floor !== Number(filters.floor)
    ) {
      return false;
    }

    return true;
  });
}