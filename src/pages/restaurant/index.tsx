import Head from 'next/head';
import Image from 'next/image';
import restaurant from 'public/images/restaurant.png';

import Button from '@/components/common/Button';
import FindRoom from '@/components/common/FindRoom';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HeroSlider from '@/components/common/HeroSlider';

export default function Restaurant() {
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
          РЕСТОРАН &laquo;СОСНЫ&raquo;
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

      <section className="mt-12 px-5 lg:px-48">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="font-medium text-white">
            <p>
              Знакомство с Алтайским краем будет неполным, если вы не оценили
              кулинарные шедевры местной кухни. Панорамный ресторан авторской
              кухни «Сосны» расположен на 1 этаже отеля и предлагает своим
              гостям не только гастрономическое путешествие, но и завораживающие
              виды алтайского пейзажа. Здесь начинается каждое утро для гостей
              Grand Chalet Altay.
            </p>
            <p>
              Ежедневно на завтраке подают ароматную выпечку, воздушные сырники
              с ягодами, свежие фрукты и ароматный кофе. Здесь мы создаем
              хорошее настроение на весь оставшийся день.
            </p>
          </div>

          <div className="grow bg-secondary px-8 pb-7 pt-14 text-white">
            <h4 className="font-extrabold">Завтрак</h4>
            <p className="whitespace-nowrap">
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
