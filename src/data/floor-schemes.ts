export interface FloorScheme {
  id: number;
  floor: number;
  title: string;
  svg: string;
}

export const floorSchemes: FloorScheme[] = [
  {
    id: 1,
    floor: 3,
    title: "3 поверх",
    svg: "/demo/floor-03.svg",
  },

  {
    id: 2,
    floor: 4,
    title: "4 поверх",
    svg: "/demo/floor-04.svg",
  },

  {
  id: 3,
  floor: 5,
  title: "5 поверх",
  svg: "/demo/floor-05.svg",
},
];