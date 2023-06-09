import { StaticImageData } from 'next/image';
import big from 'public/images/big.png';
import small from 'public/images/small.png';

export const variants = ['Мал. коттедж', 'Бол. коттедж'] as const;
export type Variants = typeof variants;
export const variantsPreview: Record<
  Variants[number],
  {
    description: string[];
    src: StaticImageData;
    fullName: string;
    size: number;
    cost: number;
  }
> = {
  'Мал. коттедж': {
    description: [
      'У каждого коттеджа персональная беседка и мангал, шампура и решетки предоставляем',
      'В доме',
      '•Спальня:',
      'Двухместная кровать (есть возможность трансформировать в две одноместные)',
      '•Кухня: Посуда, электроплита, маленький холодильник, чайник электрический и заварочный, сковородка, кастрюли',
      '•Гостиная: Телевизор, диван-кровать (для комфортного размещения 1 взрослого или 2 детей)',
      '•Душ; туалет Каждому гостю предоставляется комплект полотенец'
    ],
    src: small,
    fullName: 'Маленький коттедж',
    size: 18,
    cost: 10000
  },
  'Бол. коттедж': {
    description: [
      'У каждого коттеджа персональная беседка и мангал, шампура и решетки предоставляем',
      'В доме',
      '•Две спальни:',
      'В каждой двухместная кровать (есть возможность трансформировать в две одноместные)',
      '•Кухня:',
      'Посуда, электроплита, маленький холодильник, микроволновая печь чайник электрический и заварочный, сковородка, кастрюли',
      '•Гостиная:',
      'Большой телевизор с системой Smart TV, угловой диван -кровать на два спальных места',
      '•Душ; туалет',
      'Каждому гостю предоставляется комплект полотенец'
    ],
    src: big,
    fullName: 'Большой коттедж',
    size: 18,
    cost: 10000
  }
};

export const experiencesVariants = ['Зимой', 'Летом'] as const;
export type ExperiencesVariants = typeof experiencesVariants;
export const experiencesNames: Record<
  ExperiencesVariants[number],
  { name: string; src: string }[]
> = {
  Зимой: [
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' }
  ],
  Летом: [
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' },
    { name: 'Лыжи', src: '/images/ski.svg' }
  ]
};

export const sights = [
  'Манжерок',
  'Тавдинские пещеры',
  'Камышлинский водопад',
  'Гора Синюха',
  'Манжерокские'
] as const;
export type Sights = typeof sights;
export const sightsShow: Record<
  Sights[number],
  { description: string; src: StaticImageData }
> = {
  Манжерок: {
    description:
      'Массив из большого числа пещер карстового происхождения в Алтайском районе Алтайского края, на левом берегу Катуни. Своё название пещеры получили от названия деревни Тавда, ранее располагавшейся неподалёку от этих мест.',
    src: small
  },
  'Тавдинские пещеры': {
    description:
      'Массив из большого числа пещер карстового происхождения в Алтайском районе Алтайского края, на левом берегу Катуни. Своё название пещеры получили от названия деревни Тавда, ранее располагавшейся неподалёку от этих мест.',
    src: big
  },
  'Камышлинский водопад': {
    description:
      'Массив из большого числа пещер карстового происхождения в Алтайском районе Алтайского края, на левом берегу Катуни. Своё название пещеры получили от названия деревни Тавда, ранее располагавшейся неподалёку от этих мест.',
    src: small
  },
  'Гора Синюха': {
    description:
      'Массив из большого числа пещер карстового происхождения в Алтайском районе Алтайского края, на левом берегу Катуни. Своё название пещеры получили от названия деревни Тавда, ранее располагавшейся неподалёку от этих мест.',
    src: big
  },
  Манжерокские: {
    description:
      'Массив из большого числа пещер карстового происхождения в Алтайском районе Алтайского края, на левом берегу Катуни. Своё название пещеры получили от названия деревни Тавда, ранее располагавшейся неподалёку от этих мест.',
    src: small
  }
};

const date = new Date(
  'Fri Apr 07 2023 17:57:07 GMT+0300 (Москва, стандартное время)'
);
export const comments = [
  {
    id: 1,
    user: 'Айаал',
    stars: 4,
    comment:
      'Классная гостиница, новая, персонал доброжелательный, отзывчивый. Непередаваемый вид, чистый воздух, пахнет свежим деревом.',
    date: date,
    src: '/images/user.png'
  },
  {
    id: 2,
    user: 'Айаал',
    stars: 5,
    comment:
      'Классная гостиница, новая, персонал доброжелательный, отзывчивый. Непередаваемый вид, чистый воздух, пахнет свежим деревом.',
    date: date,
    src: '/images/user.png'
  },
  {
    id: 3,
    user: 'Айаал',
    stars: 3,
    comment:
      'Классная гостиница, новая, персонал доброжелательный, отзывчивый. Непередаваемый вид, чистый воздух, пахнет свежим деревом.',
    date: date,
    src: '/images/user.png'
  },
  {
    id: 4,
    user: 'Айаал',
    stars: 5,
    comment:
      'Классная гостиница, новая, персонал доброжелательный, отзывчивый. Непередаваемый вид, чистый воздух, пахнет свежим деревом.',
    date: date,
    src: '/images/user.png'
  },
  {
    id: 5,
    user: 'Айаал',
    stars: 5,
    comment:
      'Классная гостиница, новая, персонал доброжелательный, отзывчивый. Непередаваемый вид, чистый воздух, пахнет свежим деревом.',
    date: date,
    src: '/images/user.png'
  },
  {
    id: 6,
    user: 'Айаал',
    stars: 5,
    comment:
      'Классная гостиница, новая, персонал доброжелательный, отзывчивый. Непередаваемый вид, чистый воздух, пахнет свежим деревом.',
    date: date,
    src: '/images/user.png'
  }
];

export const tourTypes = ['Семейные', 'Экстрим.'] as const;
export type TourType = typeof tourTypes;
export const tours: Record<
  TourType[number],
  {
    name: string;
    description: string;
    hours: number;
    cost: number;
    src: StaticImageData;
  }[]
> = {
  Семейные: [
    {
      name: 'Эскимос-день',
      description:
        'Уютный номер «Компакт Квин» с двуспальной кроватью идеально сочетает в себе комфорт и выгодную стоимость. Окна этих номеров выходят на реку Катунь, быстрые воды которой обещают созерцательное настроение.',
      hours: 3,
      cost: 10000,
      src: small
    },
    {
      name: 'Эскимос-день',
      description:
        'Уютный номер «Компакт Квин» с двуспальной кроватью идеально сочетает в себе комфорт и выгодную стоимость. Окна этих номеров выходят на реку Катунь, быстрые воды которой обещают созерцательное настроение.',
      hours: 3,
      cost: 10000,
      src: small
    },
    {
      name: 'Эскимос-день',
      description:
        'Уютный номер «Компакт Квин» с двуспальной кроватью идеально сочетает в себе комфорт и выгодную стоимость. Окна этих номеров выходят на реку Катунь, быстрые воды которой обещают созерцательное настроение.',
      hours: 3,
      cost: 10000,
      src: small
    }
  ],
  'Экстрим.': [
    {
      name: 'Эскимос-день',
      description:
        'Уютный номер «Компакт Квин» с двуспальной кроватью идеально сочетает в себе комфорт и выгодную стоимость. Окна этих номеров выходят на реку Катунь, быстрые воды которой обещают созерцательное настроение.',
      hours: 3,
      cost: 10000,
      src: small
    },
    {
      name: 'Эскимос-день',
      description:
        'Уютный номер «Компакт Квин» с двуспальной кроватью идеально сочетает в себе комфорт и выгодную стоимость. Окна этих номеров выходят на реку Катунь, быстрые воды которой обещают созерцательное настроение.',
      hours: 3,
      cost: 10000,
      src: small
    },
    {
      name: 'Эскимос-день',
      description:
        'Уютный номер «Компакт Квин» с двуспальной кроватью идеально сочетает в себе комфорт и выгодную стоимость. Окна этих номеров выходят на реку Катунь, быстрые воды которой обещают созерцательное настроение.',
      hours: 3,
      cost: 10000,
      src: small
    },
    {
      name: 'Эскимос-день',
      description:
        'Уютный номер «Компакт Квин» с двуспальной кроватью идеально сочетает в себе комфорт и выгодную стоимость. Окна этих номеров выходят на реку Катунь, быстрые воды которой обещают созерцательное настроение.',
      hours: 3,
      cost: 10000,
      src: small
    }
  ]
};

export const links = [
  {
    name: 'Проживание',
    content: variants.map((variant) => {
      return {
        text: variant,
        link: '/' + encodeURI(variantsPreview[variant].fullName)
      };
    })
  },
  {
    name: 'Услуги',
    content: [
      {
        text: 'Для удобства гостей',
        link: null
      },
      { text: 'Экскурсии', link: '/tours' },
      { text: 'Room-service', link: null },
      { text: 'Горнолыжный отдых', link: null },
      { text: 'Прокат', link: null },
      { text: 'Трансфер', link: null },
      { text: 'Детский клуб', link: null }
    ]
  },
  {
    name: 'Рестораны',
    content: [
      { text: '"Сосны"', link: '/restaurant' },
      { text: '"Лес и река"', link: null },
      { text: '"Хвоя"', link: null },
      { text: 'Бар "Кедр и пар"', link: null },
      { text: '"Огонь"', link: null }
    ]
  },
  {
    name: 'Забота о гостях и экологии',
    content: [
      { text: 'Особенности строительства', link: null },
      { text: 'Использование ресурсов', link: null },
      { text: 'Экологически ответственное и здоровое питание', link: null },
      { text: 'Поддержка местных сообществ', link: null }
    ]
  },
  {
    name: 'Туркомплекс',
    content: [
      { text: 'Отзывы', link: '/reviews' },
      { text: 'Оплата проживания', link: null },
      { text: 'Карта территории', link: null },
      { text: 'Контакты', link: '/about' }
    ]
  }
];
