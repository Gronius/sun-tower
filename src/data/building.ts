export const buildingSections = {
  A: 15,
  B: 5,
} as const;

export const apartmentsPerFloor = 6;

export const totalApartments =
  (buildingSections.A + buildingSections.B) *
  apartmentsPerFloor;