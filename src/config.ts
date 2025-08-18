export type NavigationOption = {
  id: string;
  title: string;
  link: string;
};

type NavigationLink = {
  id: string;
  title: string;
  link: string;
  options?: NavigationOption[];
};

export const navigationLinks: NavigationLink[] = [
  {
    id: 'home',
    title: 'Главная',
    link: '/',
  },
  {
    id: 'laser-cutting',
    title: 'Лазерная резка',
    link: '/laser-cutting',
  },
  {
    id: 'portfolio',
    title: 'Портфолио',
    link: '/portfolio',
  },
  {
    id: 'help',
    title: 'Помощь',
    link: '/help',
  },
  {
    id: 'about',
    title: 'О компании',
    link: '/about',
  },
  {
    id: 'contacts',
    title: 'Контакты',
    link: '/contacts',
  },
];

export const services = [
  {
    id: 'lazer',
    title: 'Лазерная резка черных и цветных металлов с высокой точностью',
    description:
      'Режем с точностью от 0,02мм черную сталь толщиной до 40мм, нержавейку до 20мм, алюминий до 10мм и другие металлы.',
    image: '/images/services-images/service-lazer.png',
  },
  {
    id: 'lathe',
    title:
      '8-ми летний производственный опыт, компетентные инженеры и технологи, контроль качества',
    description:
      'Сделаем раскладку, быстро рассчитаем стоимость изготовления, дадим реальные сроки. Бережно относимся к материалам заказчика, гарантируем высокое качество деталей.',
    image: '/images/services-images/service-lathe.png',
  },
] as const;

export const TELEPHONE_NUMBER = '+78122192015';
export const EMAIL = 'zakaz24@nrg-m.ru';
export const ADDRESS = 'г. Санкт-Петербург, ул. Седова 57';
