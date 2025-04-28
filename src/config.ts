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
    link: '/services/laser-cutting',
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
    title: 'Отсканируем любой объект с сохранением параметров',
    description:
      'У нас в наличии много высокоточного оборудования которое позволяет осуществлять 3D сканирование любого объекта.',
    image: '/images/services-images/service-lazer.png',
  },
  {
    id: 'lathe',
    title: 'Моделируем любые объекты от винта до автомобиля',
    description:
      'Наши профессионалы владеют всеми современными инструментами для качественного результата.',
    image: '/images/services-images/service-lathe.png',
  },
] as const;

//Лазерная резка, токарная обработка
