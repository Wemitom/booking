import Image from 'next/image';
import map from 'public/images/map.png';

import Button from '@/components/common/Button';
import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import SectionTitle from '@/components/common/typography/SectionTitle';

const TransferSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="flex flex-col xl:flex-row ">
        <div className="flex flex-col lg:px-48">
          <SectionTitle>
            <span>ОРГАНИЗУЕМ</span>
            <br />
            <span className="sm:ml-20">ТРАНСФЕР</span>
          </SectionTitle>

          <div className="my-4 sm:ml-20 xl:my-10 [&>p]:xl:mb-10">
            <DescriptionSecondary>
              Принимаем гостей со всей России и из других стран.
            </DescriptionSecondary>
            <DescriptionSecondary>
              Заберем вас из аэропорта Горно-Алтайска и доставим на место.
            </DescriptionSecondary>
            <DescriptionSecondary>
              Дорога знимает примерно 40 минут и проходит по живописным местам
              среди алтайских гор, вдоль реки Катунь.
            </DescriptionSecondary>
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
