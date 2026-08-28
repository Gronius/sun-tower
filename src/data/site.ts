
export interface SiteData {
  name: string;
  slogan: string;

  phone: string;
  email: string;

  cta: string;
  ctaLink: string;
}

export const site: SiteData = {
  name: "Sun Tower",
  slogan: "Житло нового покоління",

  phone: "+421 XXX xxx XXX",
  email: "info@suntower.sk",

  cta: "Обрати квартиру",
  ctaLink: "#apartments",
};