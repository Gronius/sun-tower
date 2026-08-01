export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Бізнес-клас",
    description: "Сучасна архітектура та якісні матеріали.",
    icon: "building",
  },
  {
    title: "Підземний паркінг",
    description: "Безпечне місце для автомобіля.",
    icon: "parking",
  },
  {
    title: "Комори",
    description: "Додатковий простір для зберігання речей.",
    icon: "storage",
  },
  {
    title: "Енергоефективність",
    description: "Менші витрати на опалення та комфортний мікроклімат.",
    icon: "leaf",
  },
  {
    title: "Закрита територія",
    description: "Контроль доступу та безпечний двір.",
    icon: "shield",
  },
  {
    title: "Дитячий майданчик",
    description: "Комфортний простір для сімей із дітьми.",
    icon: "playground",
  },
];