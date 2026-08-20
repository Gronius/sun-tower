export interface InfrastructureItem {
  title: string;
  distance: string;
}

export interface LocationData {
  badge: string;
  title: string;
  description: string;

  address: string;

  coordinates: {
    lat: number;
    lng: number;
  };

  map: string;

  infrastructure: InfrastructureItem[];
}

export const location: LocationData = {
  badge: "Розташування",

  title: "ЖК Sun Tower на карті",

  description:
    "Комплекс розташований в одному з найзручніших районів Банської Бистриці. Поруч знаходяться магазини, навчальні заклади, громадський транспорт та зелені зони для відпочинку.",

  address: "Námestie Ľ. Štúra 5944/2, Banská Bystrica, Slovensko",

  coordinates: {
    lat: 48.726260,
    lng: 19.134740,
  },

  map: "/maps/map-placeholder.jpg",
 

  infrastructure: [
    {
      title: "Автобусна зупинка",
      distance: "2 хв",
    },
    {
      title: "Супермаркет",
      distance: "3 хв",
    },
    {
      title: "Дитячий садок",
      distance: "4 хв",
    },
    {
      title: "Школа",
      distance: "5 хв",
    },
    {
      title: "Парк",
      distance: "7 хв",
    },
    {
      title: "Центр міста",
      distance: "10 хв",
    },
  ],
};