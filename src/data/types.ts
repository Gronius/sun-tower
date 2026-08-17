export type ApartmentSection = "A" | "B";

export type ApartmentStatus =
  | "free"
  | "reserved"
  | "sold";

export type RoomCount = 1 | 2 | 3 | 4;

export interface Apartment {
  id: number;
  number: string;
  section: ApartmentSection;
  floor: number;
  rooms: RoomCount;
  area: number;
  status: ApartmentStatus;
  // planId: number;
  plan: string;
  price: number;
}

export interface FloorPlan {
  id: number;
  rooms: RoomCount;
  area: number;
  image: string;
  description: string;
}

export interface FloorScheme {
  id: number;
  name: string;
  svg: string;
  description: string;
}
export interface Floor {
  section: ApartmentSection;
  floor: number;
  schemeId: number;
}