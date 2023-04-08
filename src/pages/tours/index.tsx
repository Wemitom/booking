import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import FindRoom from '@/components/common/FindRoom';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Select from '@/components/common/Select';
import { TourType, tourTypes, tours } from '@/utils/constants';
import useSelect from '@/utils/hooks/useSelect';

const Tour = ({
  name,
  description,
  hours,
  cost,
  src
}: {
  name: string;
  description: string;
  hours: number;
  cost: number;
  src: StaticImageData;
}) => {
  return (
    <div className="my-6 flex flex-col gap-6 lg:flex-row">
      <Image src={src} alt={name} className="lg:w-64" />

      <div className="flex flex-col gap-3">
        <h3 className="font-inter text-3xl font-bold text-accent">{name}</h3>

        <div className="flex flex-row gap-3">
          <Badge>
            <>{hours} часа</>
          </Badge>
          <Badge>
            <>от {cost}Р</>
          </Badge>
        </div>

        <p className="font-inter text-white">{description}</p>
      </div>

      <div className="flex justify-center lg:flex-col">
        <Button title="Забронировать" filled />
        <p className="mt-3 hidden font-inter font-semibold text-white lg:block">
          Цена рассчитываються индивидуально
        </p>
      </div>
    </div>
  );
};

const Tours = () => {
  const { chosen } = useSelect();

  return (
    <div className="flex flex-col">
      {chosen === 'Все'
        ? tourTypes.map((type) =>
            tours[type].map((tour, i) => <Tour key={tour.name + i} {...tour} />)
          )
        : tours[chosen as TourType[number]].map((tour, i) => (
            <Tour key={tour.name + i} {...tour} />
          ))}
    </div>
  );
};

export default function ToursPage() {
  return (
    <>
      <Head>
        <title>Ресторан</title>
      </Head>

      <section className="relative min-h-screen w-auto">
        <Header />

        <Image
          priority
          src="/images/restaurant.png"
          alt="about_img"
          className="object-cover"
          fill
        />

        <h1 className="relative z-20 ml-5 mt-4 text-5xl font-extrabold !leading-snug text-white lg:ml-48 lg:mt-12 lg:text-7xl 3xl:text-8xl">
          ЭКСКУРСИИ
        </h1>

        <FindRoom />

        <div
          className="absolute bottom-0 z-10 h-full w-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(68, 81, 57, 0) 52.17%, #445139 100%)'
          }}
        />
        <div className="absolute bottom-0 z-0 h-full w-full bg-black/70" />
      </section>

      <main className="px-5 lg:px-48">
        <Select
          options={['Все', ...tourTypes]}
          indicatorID={0}
          width={7}
          renderOptions
        >
          <Tours />
        </Select>
      </main>

      <Footer />
    </>
  );
}
