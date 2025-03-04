export const navigationLinks = [
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
] as const;

export const services = [
  {
    id: 'lazer',
    title: 'Отсканируем любой объект с сохранением параметров',
    description:
      'У нас в наличии много высокоточного оборудования которое позволяет осуществлять 3D сканирование любого объекта.',
    image: '/public/images/services-images/service-lazer.png',
  },
  {
    id: 'lathe',
    title: 'Моделируем любые объекты от винта до автомобиля',
    description:
      'Наши профессионалы владеют всеми современными инструментами для качественного результата.',
    image: '/public/images/services-images/service-lathe.png',
  },
] as const;

//Лазерная резка, токарная обработка
