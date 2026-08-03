export type ApartmentStatus =
  | "available"
  | "reserved"
  | "sold";

export interface Apartment {
  id: number;

  number: string;

  section: number;

  floor: number;

  rooms: 1 | 2 | 3 | 4;

  area: number;

  status: ApartmentStatus;

  plan: string;
}

export const apartments: Apartment[] = [
  {
    id: 1,
    number: "A-201",
    section: 1,
    floor: 2,
    rooms: 1,
    area: 42.8,
    status: "available",
    plan: "/images/plans/plan-01.jpg",
  },

  {
    id: 2,
    number: "A-302",
    section: 1,
    floor: 3,
    rooms: 2,
    area: 58.4,
    status: "reserved",
    plan: "/images/plans/plan-02.jpg",
  },

  {
    id: 3,
    number: "A-501",
    section: 1,
    floor: 5,
    rooms: 3,
    area: 74.2,
    status: "available",
    plan: "/images/plans/plan-03.jpg",
    
  },

  {
    id: 4,
    number: "A-401",
    section: 2,
    floor: 2,
    rooms: 4,
    area: 98.5,
    status: "sold",
    plan: "/images/plans/plan-04.jpg",
  },

  {
    id: 5,
    number: "A-206",
    section: 2,
    floor: 2,
    rooms: 4,
    area: 78.5,
    status: "available",
    plan: "",
  },

    {
    id: 6,
    number: "A-606",
    section: 1,
    floor: 6,
    rooms: 3,
    area: 74.2,
    status: "available",
    plan: "/images/plans/plan-03.jpg",
    
  },

  // ...
];