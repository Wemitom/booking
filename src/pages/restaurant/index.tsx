import Head from 'next/head';
import restaurant from 'public/images/restaurant.png';

import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import HeroSlider from '@/components/common/HeroSlider';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import MainTitle from '@/components/common/typography/MainTitle';
import Layout from '@/layouts/Layout';

export default function Restaurant() {
  return (
    <>
      <Head>
        <title>Ресторан</title>
      </Head>

      <Layout src="/images/restaurant.png" renderFindRoom>
        <div className="relative z-20 ml-5 mt-4 lg:ml-48 lg:mt-12">
          <MainTitle>РЕСТОРАН &laquo;СОСНЫ&raquo;</MainTitle>
        </div>
      </Layout>

      <section className="mt-12 px-5 lg:px-48">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="font-medium text-white">
            <DescriptionMain>
              Знакомство с Алтайским краем будет неполным, если вы не оценили
              кулинарные шедевры местной кухни. Панорамный ресторан авторской
              кухни «Сосны» расположен на 1 этаже отеля и предлагает своим
              гостям не только гастрономическое путешествие, но и завораживающие
              виды алтайского пейзажа. Здесь начинается каждое утро для гостей
              Grand Chalet Altay.
            </DescriptionMain>
            <DescriptionMain>
              Ежедневно на завтраке подают ароматную выпечку, воздушные сырники
              с ягодами, свежие фрукты и ароматный кофе. Здесь мы создаем
              хорошее настроение на весь оставшийся день.
            </DescriptionMain>
          </div>

          <div className="bg-secondary flex h-fit flex-col justify-end px-8 pb-7 pt-14 text-white">
            <h4 className="font-extrabold">Завтрак</h4>
            <p className="lg:whitespace-nowrap">
              &laquo;Шведский стол&raquo; - Ежедневно с 7 до 11
            </p>
            <h4 className="font-extrabold">Обед и ужин</h4>
            <p className="mb-6">&laquo;A la carte&raquo; с 12 до 23</p>

            <Button title="Меню ресторана" size="full" filled />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <HeroSlider images={[restaurant, restaurant, restaurant]} />
      </section>

      <Footer />
    </>
  );
}
