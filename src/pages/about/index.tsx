import Head from 'next/head';
import Image from 'next/image';

import Button from '@/components/common/Button';
import FindRoom from '@/components/common/FindRoom';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

const About = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      <section className="relative min-h-screen w-auto">
        <Header />

        <Image
          priority
          src="/images/about.png"
          alt="about_img"
          className="object-cover"
          fill
        />

        <h1 className="relative z-20 ml-5 mt-4 text-5xl font-extrabold !leading-snug text-white lg:ml-48 lg:mt-12 lg:text-7xl 3xl:text-8xl">
          КОНТАКТЫ
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

      <main className="flex flex-col gap-9 px-5 py-20 lg:flex-row lg:justify-between lg:px-48">
        <div className="flex flex-col gap-8 lg:gap-16">
          <div>
            <h2 className="mb-6 font-inter text-4xl font-bold text-white md:text-6xl">
              8-800-1000-540
            </h2>
            <p className="text-accent">Для бронирования (бесплатно по РФ)</p>
          </div>

          <div>
            <h2 className="mb-6 font-inter text-4xl font-bold text-white md:text-6xl">
              WHATSAPP
            </h2>
            <p className="text-accent">Отвечаем круглосуточно, пн-вс</p>
          </div>

          <div>
            <h2 className="mb-6 font-inter text-4xl font-bold text-white md:text-6xl">
              НАШ АДРЕС
            </h2>
            <p className="mb-6 font-inter text-white">
              659636, Россия, Алтайский край, Алтайский район, ОЭЗ Бирюзовая
              Катунь, 31
            </p>
            <Button title="Построить маршрут" />
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-inter text-xl font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl">
            WELCOME@GRANDCHALET.RU
          </h3>
          <p className="my-6 text-accent">Задать вопрос, написать отзыв</p>

          <h4 className="text-accent">Наименования юридического лица:</h4>
          <p className="text-white">
            Общество с ограниченной ответственностью «Турист»
          </p>

          <h4 className="text-accent">Юридический адрес:</h4>
          <p className="text-white">644024, г. Омск, ул. Броз Тито, д.2</p>

          <h4 className="text-accent">ИНН:</h4>
          <p className="text-white">5504088300</p>

          <h4 className="text-accent">КПП:</h4>
          <p className="text-white">223245001</p>

          <h4 className="text-accent">ОГРН:</h4>
          <p className="text-white">1045507001792</p>

          <h4 className="text-accent">Расчетный счет:</h4>
          <p className="text-white">40702810245000008786</p>

          <h4 className="text-accent">Корреспондентский счет:</h4>
          <p className="text-white">30101810900000000673</p>

          <h4 className="text-accent">БИК:</h4>
          <p className="text-white">045209673</p>

          <h4 className="text-accent">Наименование банка:</h4>
          <p className="text-white">Омское отделение №8634 ПАО Сбербанк</p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
