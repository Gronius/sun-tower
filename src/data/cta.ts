export interface CallToActionData {
  badge: string;
  title: string;
  description: string;

  buttonText: string;

  privacyText: string;
}

export const cta: CallToActionData = {
  badge: "Консультація",

  title: "Зробіть наступний крок до власної квартири",

  description:
    "Сподобалися планування або залишилися запитання? Залиште заявку, і наш менеджер допоможе обрати квартиру та домовиться про перегляд у зручний для вас час.",

  buttonText: "Отримати консультацію",

  privacyText:
    "Натискаючи кнопку, ви погоджуєтеся на обробку персональних даних.",
};