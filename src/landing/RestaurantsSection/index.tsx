import Image from 'next/image';
import restaurantTwo from 'public/images/bar1.jpg';
import restaurantOne from 'public/images/bar3.jpg';

import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SecondaryTitle from '@/components/common/typography/SecondaryTitle';
import SectionTitle from '@/components/common/typography/SectionTitle';

const RestaurantsSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-48">
      <div className="flex flex-col">
        <SectionTitle>
          <span>КАФЕ-БАР</span>
          <br />
          <span className="xl:ml-20">С ПАНОРАМНЫМ ВИДОМ НА ОКУ</span>
        </SectionTitle>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="lg:w-2/3">
          <div className="my-8 flex flex-row items-center gap-5">
            <div className="border-accent hidden h-0 w-[45px] border-2 lg:block" />
            <DescriptionMain>
              ЯR-Кафе находится на берегу реки — великолепный панорамный вид и
              уютная атмосфера порадуют гостей, а кулинарное мастерство шефа
              сделает это место Вашим фаворитом.
            </DescriptionMain>
          </div>

          <Image src={restaurantOne} alt="resturant_one" className="w-full" />
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
              команда в ЯR-Кафе
            </DescriptionMain>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
