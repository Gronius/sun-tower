 import type { Apartment } from "./types";

export const apartments: Apartment[] = [
  { id: 1, number: "A-101", section: "A", floor: 1, rooms: 1, area: 42.8, status: "free", price: 145000, plan: "/images/plans/plan-01_1.jpg" },
  { id: 2, number: "A-102", section: "A", floor: 1, rooms: 2, area: 58.4, status: "free", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 3, number: "A-103", section: "A", floor: 1, rooms: 2, area: 61.2, status: "sold", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 4, number: "A-104", section: "A", floor: 1, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 5, number: "A-105", section: "A", floor: 1, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 6, number: "A-106", section: "A", floor: 1, rooms: 4, area: 98.5, status: "free", price: 145000, plan: "/images/plans/plan-04_1.jpg" },

  { id: 7, number: "A-201", section: "A", floor: 2, rooms: 1, area: 46.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_2.jpg",  },
  { id: 8, number: "A-202", section: "A", floor: 2, rooms: 2, area: 58.4, status: "free", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 9, number: "A-203", section: "A", floor: 2, rooms: 2, area: 56.4, status: "free", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 10, number: "A-204", section: "A", floor: 2, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 11, number: "A-205", section: "A", floor: 2, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 12, number: "A-206", section: "A", floor: 2, rooms: 4, area: 108.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_2.jpg" },

  { id: 13, number: "A-301", section: "A", floor: 3, rooms: 1, area: 46.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_2.jpg",  },
  { id: 14, number: "A-302", section: "A", floor: 3, rooms: 2, area: 58.4, status: "reserved", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 15, number: "A-303", section: "A", floor: 3, rooms: 2, area: 56.4, status: "sold", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 16, number: "A-304", section: "A", floor: 3, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 17, number: "A-305", section: "A", floor: 3, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 18, number: "A-306", section: "A", floor: 3, rooms: 4, area: 108.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_2.jpg" },

  { id: 19, number: "A-401", section: "A", floor: 4, rooms: 1, area: 42.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_1.jpg",  },
  { id: 20, number: "A-402", section: "A", floor: 4, rooms: 2, area: 58.4, status: "reserved", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 21, number: "A-403", section: "A", floor: 4, rooms: 2, area: 56.4, status: "sold", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 22, number: "A-404", section: "A", floor: 4, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 23, number: "A-405", section: "A", floor: 4, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 24, number: "A-406", section: "A", floor: 4, rooms: 4, area: 98.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_1.jpg" },

  { id: 25, number: "A-501", section: "A", floor: 5, rooms: 1, area: 46.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_2.jpg",  },
  { id: 26, number: "A-502", section: "A", floor: 5, rooms: 2, area: 58.4, status: "reserved", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 27, number: "A-503", section: "A", floor: 5, rooms: 2, area: 56.4, status: "sold", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 28, number: "A-504", section: "A", floor: 5, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 29, number: "A-505", section: "A", floor: 5, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 30, number: "A-506", section: "A", floor: 5, rooms: 4, area: 108.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_2.jpg" },



  { id: 91, number: "B-101", section: "B", floor: 1, rooms: 1, area: 46.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_2.jpg",  },
  { id: 92, number: "B-102", section: "B", floor: 1, rooms: 2, area: 58.4, status: "reserved", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 93, number: "B-103", section: "B", floor: 1, rooms: 2, area: 58.4, status: "sold", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 94, number: "B-104", section: "B", floor: 1, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 95, number: "B-105", section: "B", floor: 1, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 96, number: "B-106", section: "B", floor: 1, rooms: 4, area: 98.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_1.jpg" },

  { id: 97, number: "B-201", section: "B", floor: 2, rooms: 1, area: 46.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_2.jpg",  },
  { id: 98, number: "B-202", section: "B", floor: 2, rooms: 2, area: 58.4, status: "free", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 99, number: "B-203", section: "B", floor: 2, rooms: 2, area: 58.4, status: "free", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 100, number: "B-204", section: "B", floor: 2, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 101, number: "B-205", section: "B", floor: 2, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 102, number: "B-206", section: "B", floor: 2, rooms: 4, area: 108.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_2.jpg" },

  { id: 103, number: "B-301", section: "B", floor: 3, rooms: 1, area: 46.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_2.jpg",  },
  { id: 104, number: "B-302", section: "B", floor: 3, rooms: 2, area: 58.4, status: "reserved", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 105, number: "B-303", section: "B", floor: 3, rooms: 2, area: 58.4, status: "sold", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 106, number: "B-304", section: "B", floor: 3, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 107, number: "B-305", section: "B", floor: 3, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 108, number: "B-306", section: "B", floor: 3, rooms: 4, area: 108.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_2.jpg" },

  { id: 109, number: "B-401", section: "B", floor: 4, rooms: 1, area: 42.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_1.jpg",  },
  { id: 110, number: "B-402", section: "B", floor: 4, rooms: 2, area: 58.4, status: "reserved", price: 145000, plan: "/images/plans/plan-02_1.jpg" },
  { id: 111, number: "B-403", section: "B", floor: 4, rooms: 2, area: 56.4, status: "sold", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 112, number: "B-404", section: "B", floor: 4, rooms: 3, area: 77.2, status: "free", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 113, number: "B-405", section: "B", floor: 4, rooms: 3, area: 77.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_2.jpg" },
  { id: 114, number: "B-406", section: "B", floor: 4, rooms: 4, area: 98.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_1.jpg" },

  { id: 115, number: "B-501", section: "B", floor: 5, rooms: 1, area: 42.8,  status:  "free", price: 145000, plan: "/images/plans/plan-01_1.jpg",  },
  { id: 116, number: "B-502", section: "B", floor: 5, rooms: 2, area: 56.4, status: "reserved", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 117, number: "B-503", section: "B", floor: 5, rooms: 2, area: 56.4, status: "sold", price: 145000, plan: "/images/plans/plan-02_2.jpg" },
  { id: 118, number: "B-504", section: "B", floor: 5, rooms: 3, area: 74.2, status: "free", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 119, number: "B-505", section: "B", floor: 5, rooms: 3, area: 74.2, status: "reserved", price: 145000, plan: "/images/plans/plan-03_1.jpg" },
  { id: 120, number: "B-506", section: "B", floor: 5, rooms: 4, area: 98.5, status: "sold", price: 145000, plan: "/images/plans/plan-04_1.jpg" },

  
  // ...
];

