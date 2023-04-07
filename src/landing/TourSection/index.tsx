import Image from 'next/image';
import landingTour from 'public/images/landingTour.png';

import Button from '@/components/common/Button';

const TourSection = () => {
  return (
    <section className="mt-12 px-5 lg:px-48">
      <div className="flex flex-col-reverse gap-12 lg:flex-row 2xl:gap-20">
        <Image
          src={landingTour}
          alt="image_tour"
          className="mx-auto lg:mx-0 lg:w-1/3"
        />

        <div className="flex flex-col">
          <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl">
            <span>ТУРКОМПЛЕКС</span>
            <br />
            <span className="2xl:ml-20">НА БЕРЕГУ КАТУНИ</span>
          </h2>

          <p className="mt-7 text-white 2xl:ml-20">
            В сосновом бору на берегу реки Ока, расположилась уютная база отдыха
            «Крутой Яр». Отдыхающих ждет чистый воздух и уютные одноэтажные
            бревенчатые домики, прекрасное место и для любителей рыбалки.
          </p>

          <div className="mb-4 mt-8 flex grow flex-col justify-between gap-6 lg:mt-auto lg:grow-0 lg:flex-row lg:items-center lg:gap-0 2xl:ml-20 [&>button]:w-full lg:[&>button]:w-[280px]">
            <Button title="Карта туркомплекса" />
            <p className="grow font-inter text-white lg:text-center">
              Как доехать
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
