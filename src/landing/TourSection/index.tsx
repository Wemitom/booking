import Image from 'next/image';
import landingTour from 'public/images/landingTour.jpg';

import Button from '@/components/common/Button';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SectionTitle from '@/components/common/typography/SectionTitle';

const TourSection = () => {
  return (
    <section className="mt-12 px-5 lg:px-48">
      <div className="flex flex-col-reverse gap-12 lg:flex-row 2xl:gap-20">
        <Image
          src={landingTour}
          alt="image_tour"
          className="mx-auto max-h-screen lg:mx-0 lg:w-1/3"
        />

        <div className="flex flex-col">
          <SectionTitle>БАЗА ОТДЫХА НА ОКЕ</SectionTitle>

          <div className="mt-7 2xl:ml-20">
            <DescriptionMain>
              В сосновом бору на берегу реки Ока расположилась уютная база
              отдыха «Крутой Яр». Отдыхающих ждёт чистый воздух, необыкновенная
              природа и уютные бревенчатые одноэтажные домики. Место прекрасно
              подойдет для семейного отдыха или романтической поездки, а также
              для любителей рыбалки.
            </DescriptionMain>
          </div>

          <div className="mb-4 mt-8 flex grow flex-col justify-between gap-6 lg:mt-auto lg:grow-0 lg:flex-row lg:items-center lg:gap-0 2xl:ml-20 [&>button]:w-full lg:[&>button]:w-[280px]">
            <Button title="Карта туркомплекса" />
            <p className="grow font-serif text-white lg:text-center">
              Как доехать
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
