export interface HeroData {
  badge: string;
  title: string;
  description: string;

  primaryButton: {
    text: string;
    href: string;
  };

  secondaryButton?: {
    text: string;
    href: string;
  };
}

export const hero: HeroData = {
  badge: "Житло нового покоління",

  title: "Sun Tower",

  description:
    "Сучасний житловий комплекс бізнес-класу, створений для комфортного життя та вигідних інвестицій.",

  primaryButton: {
    text: "Обрати квартиру",
    href: "#apartments",
  },
};