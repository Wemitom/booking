import { StaticImageData } from 'next/image';
import bigMain from 'public/images/big.jpg';
import big from 'public/images/big.png';
import bigSlider1 from 'public/images/bigSlider1.jpg';
import bigSlider2 from 'public/images/bigSlider2.jpg';
import bigSlider3 from 'public/images/bigSlider3.jpg';
import bigSlider4 from 'public/images/bigSlider4.jpg';
import small from 'public/images/small.jpg';
import smallMain from 'public/images/smallMain.jpg';
import smallSlider1 from 'public/images/smallSlider1.jpg';
import smallSlider2 from 'public/images/smallSlider2.jpg';
import smallSlider3 from 'public/images/smallSlider3.jpg';

export const variants = ['Бол. коттедж', 'Мал. коттедж'] as const;
export type Variants = typeof variants;
export const variantsPreview: Record<
  Variants[number],
  {
    description: string[];
    feature: string;
    src: StaticImageData;
    srcMain: StaticImageData;
    heroSlider: StaticImageData[];
    fullName: string;
    size: number;
    cost: number;
  }
> = {
  'Мал. коттедж': {
    description: [
      'Маленький коттедж до 4 человек',
      '(размещение 2+2)',
      'У коттеджа персональная беседка и мангальная зона',
      'В доме',
      '•Спальня:',
      'Двуспальная кровать (есть коттеджи с раздельными кроватями)',
      '•Кухня:',
      'Посуда, электроплита, маленький холодильник, чайник электрический и заварочный',
      '•Гостиная:',
      'Телевизор, диван-кровать (для комфортного размещения 1 взрослого или 2 детей)',
      'Для двух гостей предоставляется комплект полотенец',
      '*Для дополнительного спального спального места (раскладной диван) нужно дополнительное белье, гости могут привезти с собой или взять у нас за доплату 500₽'
    ],
    feature:
      'Уютные небольшие коттеджи прекрасно подойдут для двоих или небольшой семьи. Дома находятся в месте с уникальной природой — сосновый лес на берегу. Яркие рассветы, пение птиц, чистый хвойный воздух — все это ждёт отдыхающих на Крутом Яре.',
    src: small,
    srcMain: smallMain,
    heroSlider: [smallSlider1, smallSlider2, smallSlider3, smallMain],
    fullName: 'Маленький коттедж',
    size: 35,
    cost: 7000
  },
  'Бол. коттедж': {
    description: [
      'Большой коттедж до 6 человек',
      '(размещение 4+2)',
      'У каждого коттеджа персональная беседка и мангал',
      'В доме',
      '•Две спальни:',
      'В каждой двухместная кровать (есть возможность трансформировать в две одноместные)',
      '•Кухня:',
      'Посуда, электроплита, маленький холодильник, микроволновая печь',
      'чайник электрический и заварочный',
      '•Гостиная:',
      'Большой телевизор с системой Smart TV, угловой диван -кровать на два спальных места',
      'Для четырех гостей предоставляются комплекты полотенец ',
      '*Для дополнительного спального места нужно дополнительное белье, гости могут привезти с собой или взять у нас за доплату 500₽'
    ],
    feature:
      'Большие деревянные коттеджи прекрасный вариант для отдыха компанией или большой семьей. Дома находятся в месте с уникальной природой — сосновый лес на берегу. Яркие рассветы, пение птиц, чистый хвойный воздух — все это ждёт отдыхающих на Крутом Яре. Возможно проживание с животными за дополнительную плату',
    src: bigSlider1,
    srcMain: bigMain,
    heroSlider: [bigSlider1, bigSlider2, bigSlider3, bigSlider4, bigMain],
    fullName: 'Большой коттедж',
    size: 70,
    cost: 10000
  }
};

export const experiencesVariants = ['Летом', 'Зимой'] as const;
export type ExperiencesVariants = typeof experiencesVariants;
export const experiencesNames: Record<
  ExperiencesVariants[number],
  { name: string; src: string; description: string | string[] }[]
> = {
  Летом: [
    {
      name: 'Бадминтон',
      src: '/images/badminton.jpg',
      description: 'Необходимый инвентарь у администрации'
    },
    {
      name: 'Волейбол',
      src: '/images/volleyball.jpg',
      description: 'Волейбольная площадка а лесу  и мяч для игры'
    },
    {
      name: 'Сап-борды',
      src: '/images/sup-board.jpg',
      description: [
        'Сапборды набирают большую популярность, ведь в отличии от других видов водных развлечений не требует особой подготовки.',
        'Прогулки по воде подарят вам незабываемые эмоции и хорошее настроение, это явно стоит попробовать!',
        'Аренда Сапборда от 750₽/час с 9:00 до 19:00'
      ]
    },
    {
      name: 'Аренда катера',
      src: '/images/boat.jpg',
      description: [
        'Аренда катера без прав ГИМС',
        'Поездка с ветерком или рыбалка на катере без капитана',
        'От 3500/час',
        'Бронирование по предварительной договоренности у администрации'
      ]
    },
    {
      name: 'Прокат электровелосипедов',
      src: '/images/bikes.jpg',
      description:
        'Для отдыхающих доступны электровелосипеды на прокат, это прекрасная альтернатива обычным велосипедам, ведь их можно использовать без скоростного режима, что хорошо для поддержания тонуса тела, а электродвигатель способствует преодолению большего расстояния и делает поезду более комфортной.'
    },
    {
      name: 'Рыбалка',
      src: '/images/fishing.jpg',
      description: [
        'Ока излюбленное рыбаками место, здесь водится такая рыба как лещ, щука, судак, окунь, стерлядь и многие другие!',
        '*Рыболовные снасти не предоставляются'
      ]
    }
  ],
  Зимой: []
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

export const comments = [
  {
    id: 1,
    user: 'Rieltor 888',
    stars: 5,
    comment: 'Хорошие домики, тихо и уютно. Полное единение с природой.',
    date: new Date('2023-04-10'),
    src: '/images/user.png'
  },
  {
    id: 2,
    user: 'Надежда М.',
    stars: 5,
    comment:
      'Спокойное и тихое место на берегу Оки. Все понравилось. Отлично отдохнули небольшой компанией. Дом тёплый и достаточно атмосферный. Рекомендую для романтических встреч это место.',
    date: new Date('2021-12-07'),
    src: '/images/user.png'
  },
  {
    id: 3,
    user: 'annamrazz',
    stars: 5,
    comment:
      'Очень тёплое уютное тихое место! Всем советую, очень хочу побывать здесь ещё раз. Чистота, порядок. Рядом река, красивый живописный вид. Самое то, для того, чтобы отдохнуть от городской суматохи!',
    date: new Date('2022-04-28'),
    src: '/images/user.png'
  },
  {
    id: 4,
    user: 'Kiss M.',
    stars: 5,
    comment:
      'Неоднократно приезжаем на отдых с семьёй и друзьями, сейчас актуальны скидки и вообще супер, был на днях',
    date: new Date('2023-01-27'),
    src: '/images/user.png'
  },
  {
    id: 5,
    user: 'Алекс. Ф',
    stars: 5,
    comment:
      'Приезжали с друзьями в баню, все понравилось, в помещении для отдыха тепло,есть ТВ, посуда, банные шапочки и простыни, парилка отличная, имеется бассейн, кому-как, а мне понравилось , приеду ещё👍',
    date: new Date('2022-12-21'),
    src: '/images/user.png'
  },
  {
    id: 6,
    user: 'Евгения В.',
    stars: 5,
    comment: 'Отличное место!!! Всем советую… красота невозможная 🤗😍',
    date: new Date('2023-05-19'),
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
    name: 'О нас',
    content: [
      { text: 'Оплата проживания', link: null },
      { text: 'Карта территории', link: null },
      { text: 'Как доехать', link: null },
      { text: 'Контакты', link: '/about' }
    ]
  },
  {
    name: 'Проживание',
    content: variants
      .map<{ text: string; link: string | null }>((variant) => {
        const add =
          variant === 'Бол. коттедж'
            ? ' (до 6 человек)'
            : variant === 'Мал. коттедж'
            ? ' (до 4 человек)'
            : '';
        return {
          text: variant + add,
          link: '/' + encodeURI(variantsPreview[variant].fullName)
        };
      })
      .concat({ text: 'Проживание с животными', link: '/pets' })
  },
  {
    name: 'Для гостей',
    content: [
      {
        text: 'Банный комплекс с бассейном',
        link: null
      },
      { text: 'Кафе-бар на Оке', link: '/restaurant' },
      { text: 'Развлечения', link: null }
    ]
  },
  {
    name: 'Кафе-бар',
    content: [
      { text: 'ЯR-кафе', link: '/restaurant' },
      { text: 'Организация банкетов/аренда зала', link: null }
    ]
  }
];
