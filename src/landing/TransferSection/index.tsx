import Image from 'next/image';
import map from 'public/images/map.png';

import Button from '@/components/common/Button';

const TransferSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="flex flex-col xl:flex-row ">
        <div className="flex flex-col lg:px-48">
          <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl">
            <span>ОРГАНИЗУЕМ</span>
            <br />
            <span className="sm:ml-20">ТРАНСФЕР</span>
          </h2>

          <div className="my-4 font-inter text-white sm:ml-20 xl:my-10 [&>p]:xl:mb-10">
            <p>Принимаем гостей со всей России и из других стран.</p>
            <p>Заберем вас из аэропорта Горно-Алтайска и доставим на место.</p>
            <p>
              Дорога знимает примерно 40 минут и проходит по живописным местам
              среди алтайских гор, вдоль реки Катунь.
            </p>
          </div>

          <div className="mb-6 flex flex-col items-center gap-5 xl:mb-16 xl:flex-row xl:items-start xl:gap-12">
            <Button title="Заказать трансфер" filled />
            <Button title="Построить маршрут" />
          </div>
        </div>

        <div>
          <Image src={map} alt="map" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
};

export default TransferSection;
