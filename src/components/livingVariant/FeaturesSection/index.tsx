import React from 'react';

import Image from 'next/image';

const Feature = ({
  src,
  title,
  description
}: {
  src: string;
  title: string;
  description: string[];
}) => {
  return (
    <div className="text-white">
      <Image src={src} alt={title} width={700} height={429} />
      <h3 className="my-6 text-xl font-semibold">{title}</h3>

      {description.map((line, i) => (
        <p key={'line_' + i} className="font-medium 3xl:text-2xl">
          {line}
        </p>
      ))}
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="px-5 lg:px-48">
      <h2 className="my-12 font-inter text-4xl font-bold text-accent md:text-6xl">
        ОСОБЕННОСТИ
      </h2>

      <div className="flex flex-col gap-16 lg:flex-row">
        <Feature
          src="/images/small.png"
          title="ВИД НА РЕКУ"
          description={[
            'Меньше часа от Горно-Алтайска и вы окажетесь в одном из красивейших мест Алтая. Гостиничный комплекс Grand Chalet Altay расположился на площади 8,5 Га на левом берегу реки Катунь, всего 10 км от горнолыжного курорта Манжерок на территории комплекса природного и экстремального туризма «Бирюзовая Катунь»',
            'Каждого гостя здесь ждет идеальный отдых вне зависимости от привычек и представлений о нем. Совершите настоящее кулинарное путешествие по Алтаю в наших ресторанах a la catre, покорите новые вершины и горнолыжные спуски или зарядитесь энергией и здоровьем на весь год в банном комплексе «Кедр и Пар».'
          ]}
        />
        <Feature
          src="/images/small.png"
          title="ВЫГОДНАЯ СТОИМОСТЬ"
          description={[
            'Меньше часа от Горно-Алтайска и вы окажетесь в одном из красивейших мест Алтая. Гостиничный комплекс Grand Chalet Altay расположился на площади 8,5 Га на левом берегу реки Катунь, всего 10 км от горнолыжного курорта Манжерок на территории комплекса природного и экстремального туризма «Бирюзовая Катунь»',
            'Каждого гостя здесь ждет идеальный отдых вне зависимости от привычек и представлений о нем. Совершите настоящее кулинарное путешествие по Алтаю в наших ресторанах a la catre, покорите новые вершины и горнолыжные спуски или зарядитесь энергией и здоровьем на весь год в банном комплексе «Кедр и Пар».'
          ]}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
