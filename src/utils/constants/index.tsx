import { StaticImageData } from 'next/image';
import big from 'public/images/big.png';
import small from 'public/images/small.png';

export const variants = ['Мал. коттедж', 'Бол. коттедж'] as const;
export type Variants = typeof variants;
export const variantsPreview: Record<
  Variants[number],
  { description: JSX.Element; src: StaticImageData }
> = {
  'Мал. коттедж': {
    description: (
      <p className="font-inter text-white">
        У каждого коттеджа персональная беседка и мангал, шампура и решетки
        предоставляем
        <br />В доме
        <br />
        •Спальня:
        <br />
        Двухместная кровать (есть возможность трансформировать в две
        одноместные)
        <br />
        •Кухня: Посуда, электроплита, маленький холодильник, чайник
        электрический и заварочный, сковородка, кастрюли
        <br />
        •Гостиная: Телевизор, диван-кровать (для комфортного размещения 1
        взрослого или 2 детей)
        <br />
        •Душ; туалет Каждому гостю предоставляется комплект полотенец
      </p>
    ),
    src: small
  },
  'Бол. коттедж': {
    description: (
      <p className="font-inter text-white">
        У каждого коттеджа персональная беседка и мангал, шампура и решетки
        предоставляем
        <br />
        В доме
        <br />
        •Две спальни:
        <br />
        В каждой двухместная кровать (есть возможность трансформировать в две
        одноместные)
        <br />
        •Кухня:
        <br />
        Посуда, электроплита, маленький холодильник, микроволновая печь чайник
        электрический и заварочный, сковородка, кастрюли
        <br />
        •Гостиная:
        <br />
        Большой телевизор с системой Smart TV, угловой диван -кровать на два
        спальных места
        <br />
        •Душ; туалет
        <br />
        Каждому гостю предоставляется комплект полотенец
      </p>
    ),
    src: big
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
