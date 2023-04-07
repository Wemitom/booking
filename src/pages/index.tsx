import Head from 'next/head';
import Image from 'next/image';
import compass from 'public/images/compass.svg';
import experiences from 'public/images/experiences.png';
import landingTour from 'public/images/landingTour.png';
import restaurantOne from 'public/images/restaurantOne.png';
import restaurantTwo from 'public/images/restaurantTwo.png';
import spa from 'public/images/spa.png';

import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Select from '@/components/common/Select';
import Controls from '@/components/common/Select/Controls';
import Options from '@/components/common/Select/Options';
import {
  ExperiencesVariants,
  Variants,
  experiencesNames,
  experiencesVariants,
  variants,
  variantsPreview
} from '@/utils/constants';
import useSelect from '@/utils/hooks/useSelect';

const MainSection = () => {
  return (
    <section className="relative min-h-screen w-auto bg-landingPhone bg-cover bg-center bg-no-repeat sm:bg-landingDesk">
      <Header />
      <main>
        <div className="relative z-10 ml-5 mt-4 text-white lg:ml-48">
          <h1 className="text-5xl font-extrabold !leading-snug lg:text-7xl 3xl:text-8xl">
            GRAND
            <br />
            CHALET
            <br />
            ALTAY
          </h1>
          <div className="mt-8 flex flex-row items-center gap-5">
            <div className="hidden h-0 w-[45px] border-2 border-accent lg:block" />
            <p>Пять звёзд в окружении гор на берегу Катуни</p>
          </div>
        </div>

        <div className="relative z-10 mx-5 mt-8 flex flex-col items-center gap-6 bg-white px-5 py-12 sm:pl-28 sm:pr-16 lg:mx-48 2xl:flex-row [&>*]:grow">
          <div>
            <label>Заезд</label>
            <input />
          </div>

          <div>
            <label>Выезд</label>
            <input />
          </div>

          <div>
            <label>Гости</label>
            <input />
          </div>

          <Button title="Найти номер" filled />
        </div>

        <div
          className="absolute bottom-0 z-0 hidden h-full w-full lg:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(68, 81, 57, 0) 52.17%, #445139 100%)'
          }}
        />
      </main>
    </section>
  );
};

const TourSection = () => {
  return (
    <section className="mt-12 px-5 lg:px-48">
      <div className="flex flex-col-reverse gap-12 lg:flex-row 2xl:gap-20">
        <Image src={landingTour} alt="image_tour" className="lg:w-1/3" />

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

const Preview = () => {
  const { chosen } = useSelect();

  return (
    <div className="flex flex-col gap-6 xl:flex-row">
      <div className="flex flex-col items-center xl:relative xl:block">
        <div className="my-6 mr-auto">
          <Options options={variants} width={9} indicatorID={1} />
        </div>
        <Image
          src={variantsPreview[chosen as Variants[number]].src}
          alt={chosen}
          className="xl:hidden"
        />
        {variantsPreview[chosen as Variants[number]].description}

        <div className="xl:absolute xl:bottom-0">
          <div className="mt-8">
            <Button title="Посмотреть" />
          </div>
          <Controls options={variants} />
        </div>
      </div>

      <Image
        src={variantsPreview[chosen as Variants[number]].src}
        alt={chosen}
        className="hidden h-[634px] w-1/2 xl:block"
      />
    </div>
  );
};

const LivingOptionsSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-48">
      <div className="flex flex-col">
        <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl">
          <span>ВАРИАНТЫ</span>
          <br />
          <span className="sm:ml-20">ПРОЖИВАНИЯ</span>
        </h2>
      </div>

      <Select options={variants}>
        <Preview />
      </Select>
    </section>
  );
};

const SpaSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="mb-8 flex flex-col gap-10 lg:justify-between lg:px-48 xl:flex-row xl:items-center">
        <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl xl:w-1/3">
          КРУПНЕЙШИЙ SPA В ГОРАХ АЛТАЯ
        </h2>

        <p className="text-white xl:w-1/2">
          В 2023 году на территории GRAND CHALET ALTAY планируется запуск
          современного SPA-комплекса площадью 2 550 м2, где для гостей будут
          доступны разнообразные процедуры для отдыха и восстановления. Здесь вы
          сможете не только ощутить полный релакс, но и поправить здоровье.
        </p>
      </div>

      <Image src={spa} alt="spa" />

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:px-36 [&>*]:flex [&>*]:flex-col [&>*]:gap-3 [&>*]:lg:px-8">
        <div>
          <h3 className="text-3xl font-bold text-accent">5 парных</h3>
          <p className="text-white">
            помогут снять усталось и получить наслаждение от правильного пара
          </p>
        </div>

        <div className="hidden w-0 border-white/40 !p-0 lg:block lg:h-12 lg:border" />

        <div>
          <h3 className="text-3xl font-bold text-accent">16 программ</h3>
          <p className="text-white">
            вдохнут в тело новую энергию и поднимут настроение
          </p>
        </div>

        <div className="hidden w-0 border-white/40 !p-0 lg:block lg:h-12 lg:border" />

        <div>
          <h3 className="text-3xl font-bold text-accent">20 метров</h3>
          <p className="text-white">
            составляет длина крытого бассейна, для любителей активного отдыха
          </p>
        </div>
      </div>
    </section>
  );
};

const RestaurantsSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-48">
      <div className="flex flex-col">
        <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl">
          <span>АВТОРСКАЯ КУХНЯ</span>
          <br />
          <span className="xl:ml-20">В ТРЕХ РЕСТОРАНАХ</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="lg:w-2/3">
          <div className="mt-8 flex flex-row items-center gap-5">
            <div className="hidden h-0 w-[45px] border-2 border-accent lg:block" />
            <p className="text-white">
              Основа концепции ресторанов Grand Chalet Altay - это использование
              локальных продуктов, авторская кухня и безупречный сервис.
            </p>
          </div>

          <Image src={restaurantOne} alt="resturant_one" className="w-full" />

          <div className="mt-3 flex flex-col gap-10 lg:flex-row lg:items-center [&>*]:flex [&>*]:flex-col [&>*]:gap-3">
            <div>
              <h3 className="text-3xl font-bold text-accent">
                Завтрак «Шведский стол»
              </h3>

              <p className="mt-3 text-white">
                Отдых от суеты, шума и серых будней мегаполиса предлагает наша
                команда в каждом из ресторанов Grand Chalet Altay
              </p>
            </div>

            <div className="hidden w-0 border-white/40 lg:block lg:h-20 lg:border" />

            <div>
              <h3 className="text-3xl font-bold text-accent">
                Кулинарные традиции
              </h3>

              <p className="mt-3 text-white">
                Знакомство с Алтаем будет неполным, если вы не оценили
                кулинарные шедевры местной кухни
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <Image
            src={restaurantTwo}
            alt="resturant_two"
            className="w-full lg:mt-12"
          />

          <div className="mt-3">
            <h3 className="text-3xl font-bold text-accent">
              Неповторимая атмосфера
            </h3>

            <p className="mt-3 text-white">
              Отдых от суеты, шума и серых будней мегаполиса предлагает наша
              команда в каждом из ресторанов Grand Chalet Altay
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className="flex flex-col items-center border border-accent/50 px-16 py-5">
      <Image src={src} alt={name} width={56} height={56} />
      <p className="font-inter font-medium text-white">{name}</p>
    </div>
  );
};

const Experineces = () => {
  const { chosen } = useSelect();

  return (
    <div className="flex gap-6 overflow-x-auto py-6 2xl:flex-wrap 2xl:overflow-x-hidden 2xl:pr-32">
      {experiencesNames[chosen as ExperiencesVariants[number]].map(
        (experience, i) => (
          <Experience key={experience.name + i} {...experience} />
        )
      )}
    </div>
  );
};

const ExperiencesSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="flex flex-col">
        <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl lg:px-48">
          <p>ЯРКИЕ ВПЕЧАТЛЕНИЯ</p>
        </h2>
      </div>

      <div className="mt-9 flex flex-col-reverse gap-9 2xl:flex-row 2xl:gap-24">
        <div className="2xl:w-1/2">
          <div className="lg:px-48 2xl:px-0">
            <Image src={experiences} alt="experiences" className="w-full" />
          </div>

          <div className="mt-11 lg:px-48 2xl:pl-48 2xl:pr-0">
            <div className="flex items-start gap-4">
              <Image src={compass} alt="compass" />

              <div>
                <h3 className="mb-3 h-9 align-middle font-semibold text-accent">
                  Рядом с туркомплексом Grand Chalet Altay
                </h3>
                <p className="font-medium text-white">
                  Вас ожидают невероятные спуски по горам Алтая, заснеженные
                  пики и конечно отдых в приятной компании единомышленников. На
                  горно-лыжных комплексах Алтая доступны склоны разного уровня
                  сложности – как для начинающих, так и для продвинутых, а ваши
                  дети после занятий с профессиональным тренером начнут кататься
                  как взрослые.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-48 2xl:px-0 2xl:w-1/2">
          <Select options={experiencesVariants} renderOptions width={6}>
            <Experineces />
          </Select>
        </div>
      </div>
    </section>
  );
};

const SightsSections = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col">
        <h2 className="mt-12 px-5 font-inter text-4xl font-bold text-accent md:w-2/3 md:text-6xl lg:px-48">
          <p>ЗНАКОВЫЕ МЕСТА АЛТАЯ</p>
        </h2>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainSection />
      <TourSection />
      <LivingOptionsSection />
      <SpaSection />
      <RestaurantsSection />
      <ExperiencesSection />
      <SightsSections />

      <Footer />
    </>
  );
}
