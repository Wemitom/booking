import { useCallback, useEffect, useRef, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import { ru } from 'date-fns/locale';
import Head from 'next/head';
import Image from 'next/image';
import calendar from 'public/images/calendar.svg';
import compass from 'public/images/compass.svg';
import experiences from 'public/images/experiences.png';
import landingTour from 'public/images/landingTour.png';
import location from 'public/images/locationHollow.svg';
import map from 'public/images/map.png';
import person from 'public/images/person.svg';
import restaurantOne from 'public/images/restaurantOne.png';
import restaurantTwo from 'public/images/restaurantTwo.png';
import spa from 'public/images/spa.png';
import star from 'public/images/star.svg';
import DatePicker from 'react-datepicker';
import { registerLocale, setDefaultLocale } from 'react-datepicker';

import Button from '@/components/common/Button';
import CircleButton from '@/components/common/CircleButton';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Select from '@/components/common/Select';
import Controls from '@/components/common/Select/Controls';
import Options from '@/components/common/Select/Options';
import {
  ExperiencesVariants,
  Sights,
  Variants,
  comments,
  experiencesNames,
  experiencesVariants,
  sights,
  sightsShow,
  variants,
  variantsPreview
} from '@/utils/constants';
import { classNames, formatDate } from '@/utils/functions';
import useSelect from '@/utils/hooks/useSelect';

const MainSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  registerLocale('ru', ru);
  setDefaultLocale('ru');

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

        <div className="relative z-10 mx-5 mt-8 flex flex-col items-center gap-6 bg-white p-5 sm:pl-28 sm:pr-16 lg:mx-48 2xl:flex-row 2xl:px-5 2xl:py-12 [&>*]:grow">
          <div className="flex flex-col items-start 2xl:flex-row 2xl:items-center 2xl:shadow-[4px_4px_4px_rgba(0,0,0,0.1)] [&>*]:w-full [&>*]:grow [&>*]:2xl:mr-4">
            <div className="flex">
              <div className="grow">
                <label className="font-light">Заезд</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="font-inter font-semibold"
                />
              </div>
              <Image src={calendar} alt="calendar" />
            </div>

            <div className="flex">
              <div className="grow">
                <label className="font-light">Выезд</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="font-inter font-semibold"
                />
              </div>
              <Image src={calendar} alt="calendar" />
            </div>

            <div className="flex">
              <div className="flex grow flex-col">
                <label className="font-light">Гости</label>
                <input />
              </div>
              <Image src={person} alt="person" />
            </div>
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
          className="my-auto xl:hidden"
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

          <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10 [&>*]:flex [&>*]:flex-col [&>*]:gap-3">
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
      <h2 className="mt-12 font-inter text-4xl font-bold text-accent md:text-6xl lg:px-48">
        <p>ЯРКИЕ ВПЕЧАТЛЕНИЯ</p>
      </h2>

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

        <div className="lg:px-48 2xl:w-1/2 2xl:px-0">
          <Select options={experiencesVariants} renderOptions width={6}>
            <Experineces />
          </Select>
        </div>
      </div>
    </section>
  );
};

const SightsSections = () => {
  const [curPos, setCurPos] = useState<Sights[number]>('Манжерок');
  const handleClick = (left?: boolean) => {
    const curPosI = sights.indexOf(curPos);

    if (curPosI === 0 && left) setCurPos(sights[sights.length - 1]);
    else if (curPosI === sights.length - 1 && !left) setCurPos(sights[0]);
    else if (left) setCurPos(sights[curPosI - 1]);
    else setCurPos(sights[curPosI + 1]);
  };

  return (
    <section className="mt-16 overflow-hidden">
      <h2 className="mt-12 px-5 font-inter text-4xl font-bold text-accent md:w-2/3 md:text-6xl lg:px-48">
        <p>ЗНАКОВЫЕ МЕСТА АЛТАЯ</p>
      </h2>

      <div className="mt-8 flex flex-row items-center gap-5 px-5 lg:px-48">
        <div className="hidden h-0 w-[45px] border-2 border-accent lg:block" />
        <p className="text-3xl font-bold text-white">{curPos.toUpperCase()}</p>
      </div>

      <div className="flex flex-col-reverse gap-5 px-5 font-inter text-white lg:h-96 lg:flex-row lg:px-48">
        <div>
          <p className="pt-6">{sightsShow[curPos].description}</p>

          <div className="mt-12 flex justify-center gap-20 lg:justify-normal">
            <CircleButton handleClick={() => handleClick(true)} left />
            <CircleButton handleClick={() => handleClick()} />
          </div>
        </div>

        <Image
          src={sightsShow[curPos].src}
          alt={curPos}
          className="w-full lg:max-w-[50%]"
        />
      </div>

      <div className="relative mt-32 flex h-12 w-full items-center">
        <div className="absolute top-3 h-px w-[999999px] bg-accent" />
        {sights.map((sight, i) => (
          <div
            key={sight}
            className="absolute left-12 flex flex-col items-center transition-transform md:left-20 lg:left-64"
            style={{
              transform: `translateX(${14 * (i - sights.indexOf(curPos))}rem)`
            }}
          >
            {curPos === sight && (
              <Image
                src={location}
                alt="location"
                className="absolute -top-10 fill-transparent"
              />
            )}
            <div
              className={classNames(
                'rounded-full transition-colors duration-300',
                curPos === sight
                  ? 'h-6 w-6 bg-accent'
                  : 'h-6 w-6 bg-[#d9d9d9]/50'
              )}
            />
            <p
              className={classNames(
                'text-inter transition-colors duration-300',
                curPos === sight ? 'text-accent' : 'text-white'
              )}
            >
              {sight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Comment = ({
  user,
  stars,
  comment,
  date,
  src
}: {
  user: string;
  stars: number;
  comment: string;
  date: Date;
  src: string;
}) => {
  return (
    <div className="w-80 bg-secondary py-5 pl-8 pr-3 min-[450px]:w-96 min-[520px]:w-[28rem] lg:h-[38rem] lg:w-[36rem] lg:px-16 lg:py-11">
      <div className="flex flex-row">
        <Image
          src={src}
          alt="avatar"
          width={110}
          height={110}
          className="w-[58px] rounded-[35px] lg:w-[110px]"
        />

        <div className="ml-6">
          <p className="font-inter font-semibold text-white">{user}</p>

          <div className="mt-3 flex gap-1">
            {Array.from(Array(5)).map((_, i) => (
              <Image
                key={i}
                src={star}
                alt="star"
                className="w-[14px] lg:w-[26px]"
              />
            ))}
          </div>
        </div>

        <p className="ml-auto text-sm font-light text-white">
          {formatDate(date)}
        </p>
      </div>

      <p className="mt-8 font-inter text-white">{comment}</p>
    </div>
  );
};

const CommentsSection = () => {
  const [curComment, setCurComment] = useState(0);
  const [width, setWidth] = useState(0);
  const flexRef = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (left?: boolean) => {
      if (curComment === 0 && left)
        setCurComment(comments.indexOf(comments[comments.length - 1]));
      else if (curComment === comments.length - 1 && !left)
        setCurComment(comments.indexOf(comments[0]));
      else if (left) setCurComment(comments.indexOf(comments[curComment - 1]));
      else setCurComment(comments.indexOf(comments[curComment + 1]));
    },
    [curComment]
  );

  useEffect(() => {
    const changeWidth = () => {
      if (flexRef.current) {
        setWidth(flexRef.current.firstElementChild!.clientWidth);
      }
    };

    if (window !== undefined) {
      window.addEventListener('resize', changeWidth);
      changeWidth();
    }

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <section className="mt-16 overflow-hidden px-5">
      <div className="mb-6 flex flex-row items-center justify-between lg:px-48">
        <h2 className="sticky font-inter text-4xl font-bold text-accent md:text-6xl">
          <p>ОТЗЫВЫ О НАС</p>
        </h2>

        <div className="hidden gap-20 lg:flex">
          <CircleButton handleClick={() => handleClick(true)} left />
          <CircleButton handleClick={() => handleClick()} />
        </div>
      </div>

      <div
        className="flex w-fit gap-12 overflow-hidden transition-transform lg:pl-48"
        style={{
          transform: `translateX(-${
            (width / 16) * curComment + 3 * curComment
          }rem)`
        }}
        ref={flexRef}
      >
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-20 lg:hidden">
        <CircleButton handleClick={() => handleClick(true)} left />
        <CircleButton handleClick={() => handleClick()} />
      </div>

      <div className="mt-6 px-5 lg:px-48">
        <div className="flex justify-center lg:w-[280px]">
          <Button title="Больше отзывов" size="full" filled />
        </div>
      </div>
    </section>
  );
};

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Grand Chalet Altay</title>
        <meta
          name="description"
          content="В сосновом бору на берегу реки Ока, расположилась уютная база отдыха «Крутой Яр». Отдыхающих ждет чистый воздух и уютные одноэтажные бревенчатые домики, прекрасное место и для любителей рыбалки."
        />
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
      <CommentsSection />
      <TransferSection />

      <Footer />
    </>
  );
}
