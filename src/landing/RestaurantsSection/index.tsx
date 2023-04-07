import Image from 'next/image';
import restaurantOne from 'public/images/restaurantOne.png';
import restaurantTwo from 'public/images/restaurantTwo.png';

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

export default RestaurantsSection;
