import Head from 'next/head';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import SidebarControlls from '@/components/common/SidebarControlls';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import { links } from '@/utils/constants';

const Pets = () => {
  return (
    <>
      <Head>
        <title>Проживание с животными</title>
      </Head>

      <SidebarControlls values={links}>
        <Header />
      </SidebarControlls>

      <div className="relative z-20 ml-5 mt-4 pt-32 lg:ml-48 lg:mt-12">
        <DescriptionSecondary>ПРОЖИВАНИЕ С ЖИВОТНЫМИ</DescriptionSecondary>
      </div>

      <main className="flex flex-col gap-9 px-5 py-20 lg:px-48">
        <DescriptionMain>
          Отдых с животными возможен у нас, мы знаем что они не менее важные
          члены семьи и большинство тяжело переносит разлуку с любимым хозяином!
        </DescriptionMain>
        <DescriptionMain>
          Соблюдение несложных правил позволит вам обеспечить спокойный и
          комфортный отдых как для вас и вашего питомца ,так и для окружающих:
        </DescriptionMain>
        <ol>
          <li className="mb-3 ml-12">
            <DescriptionSecondary>
              1.Уборка за вашим питомцем (порядок на территории и в домике)
            </DescriptionSecondary>
          </li>
          <li className="ml-12">
            <DescriptionSecondary>
              2.Обеспечение безопасности и спокойствия других отдыхающих
              3.Несение ответственности за деятельность,безопасность и здоровье
              животного
            </DescriptionSecondary>
          </li>
        </ol>
        <DescriptionSecondary>
          Доплата за пребывание питомца (собаки/ кошки) 1000₽ на весь период
          проживания Рептилии, рыбы ,грызуны, птицы без доплаты.
        </DescriptionSecondary>
      </main>
      <Footer />
    </>
  );
};

export default Pets;
