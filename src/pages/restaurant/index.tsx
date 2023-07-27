import Head from 'next/head';
import Image from 'next/image';
import restaurantOne from 'public/images/bar1.jpg';
import restaurantTwo from 'public/images/bar2.jpg';
import restaurantThree from 'public/images/bar3.jpg';
import restaurantFour from 'public/images/bar4.jpg';

import Footer from '@/components/common/Footer';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import MainTitle from '@/components/common/typography/MainTitle';
import Layout from '@/layouts/Layout';

export default function Restaurant() {
  return (
    <>
      <Head>
        <title>Ресторан</title>
      </Head>

      <Layout src="/images/bar3.jpg">
        <div className="relative z-20 ml-5 lg:ml-48">
          <MainTitle>КАФЕ-БАР НА ОКЕ</MainTitle>
        </div>
      </Layout>

      <section className="mt-12 px-5 lg:px-48">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="font-medium text-white">
            <DescriptionMain>
              ЯR-Кафе находится на берегу реки — великолепный панорамный вид и
              уютная атмосфера порадуют гостей, а кулинарное мастерство шефа
              сделает это место Вашим фаворитом.
            </DescriptionMain>
          </div>

          <div className="bg-secondary flex h-fit flex-col justify-end px-8 pb-7 pt-14 text-white">
            <h4 className="font-extrabold">Ежедневно с 10:00 до 22:00 </h4>
            <p className="lg:whitespace-nowrap">
              (Ранний и поздний прием гостей по запросу)
            </p>
            <h4 className="font-extrabold">Услуга «заказ в номер»</h4>
            <h4 className="whitespace-wrap font-extrabold">
              Аренда зала/организация банкетов
              8&#8209;991&#8209;104&#8209;14&#8209;94 (WhatsApp)
            </h4>
          </div>
        </div>

        <div className="my-6 grid grid-cols-2 gap-6">
          <Image src={restaurantOne} alt="resturant_one" />
          <Image src={restaurantTwo} alt="resturant_two" />
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6">
          <Image src={restaurantThree} alt="resturant_three" />
          <Image src={restaurantFour} alt="resturant_four" />
        </div>
      </section>

      <Footer />
    </>
  );
}
