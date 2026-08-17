export interface FloorPlan {
  id: number;

  rooms: 1 | 2 | 3 | 4;

  area: number;

  image: string;

  description: string;
}

export const floorPlans: FloorPlan[] = [
  { id: 1, rooms: 1, area: 42.8, image: "/images/plans/plan-01.jpg",  description: "Компактне планування для комфортного життя однієї людини або молодої пари.", },
  { id: 2, rooms: 1, area: 46.8, image: "/images/plans/plan-02.jpg",  description: "Компактне планування для комфортного життя однієї людини або молодої пари.", },

  { id: 3, rooms: 2, area: 58.4, image: "/images/plans/plan-03.jpg", description: "Функціональне двокімнатне планування з просторою кухнею-вітальнею.",},
  { id: 4, rooms: 2, area: 56.4, image: "/images/plans/plan-04.jpg", description: "Функціональне двокімнатне планування з просторою кухнею-вітальнею.",},

  { id: 5, rooms: 3, area: 74.2, image: "/images/plans/plan-05.jpg", description: "Ідеальний вибір для сім'ї з дітьми.",},
  { id: 6, rooms: 3, area: 77.2, image: "/images/plans/plan-06.jpg", description: "Ідеальний вибір для сім'ї з дітьми.",},

  {id: 7, rooms: 4, area: 98.5,image: "/images/plans/plan-07.jpg", description: "Просторе планування преміум-класу для великої родини.", },
  {id: 8, rooms: 4, area: 108.5,image: "/images/plans/plan-08.jpg", description: "Просторе планування преміум-класу для великої родини.", },
];