import Image from 'next/image';
import restaurantOne from 'public/images/restaurantOne.png';
import restaurantTwo from 'public/images/restaurantTwo.png';

import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SecondaryTitle from '@/components/common/typography/SecondaryTitle';
import SectionTitle from '@/components/common/typography/SectionTitle';

const RestaurantsSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-48">
      <div className="flex flex-col">
        <SectionTitle>
          <span>АВТОРСКАЯ КУХНЯ</span>
          <br />
          <span className="xl:ml-20">В ТРЕХ РЕСТОРАНАХ</span>
        </SectionTitle>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="lg:w-2/3">
          <div className="my-8 flex flex-row items-center gap-5">
            <div className="border-accent hidden h-0 w-[45px] border-2 lg:block" />
            <DescriptionMain>
              Основа концепции ресторанов Grand Chalet Altay - это использование
              локальных продуктов, авторская кухня и безупречный сервис.
            </DescriptionMain>
          </div>

          <Image src={restaurantOne} alt="resturant_one" className="w-full" />

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10 [&>*]:flex [&>*]:flex-col [&>*]:gap-3">
            <div>
              <SecondaryTitle>
                Завтрак &laquo;Шведский стол&raquo;
              </SecondaryTitle>

              <DescriptionMain>
                Отдых от суеты, шума и серых будней мегаполиса предлагает наша
                команда в каждом из ресторанов Grand Chalet Altay
              </DescriptionMain>
            </div>

            <div className="my-auto hidden w-0 border-white/40 lg:block lg:h-20 lg:border" />

            <div>
              <SecondaryTitle>Кулинарные традиции</SecondaryTitle>

              <DescriptionMain>
                Знакомство с Алтаем будет неполным, если вы не оценили
                кулинарные шедевры местной кухни
              </DescriptionMain>
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
            <SecondaryTitle>Неповторимая атмосфера</SecondaryTitle>

            <DescriptionMain>
              Отдых от суеты, шума и серых будней мегаполиса предлагает наша
              команда в каждом из ресторанов Grand Chalet Altay
            </DescriptionMain>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
