import Head from 'next/head';

import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import MainTitle from '@/components/common/typography/MainTitle';
import Layout from '@/layouts/Layout';

const About = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>

      <Layout src="/images/about.jpg" renderFindRoom>
        <div className="relative z-20 ml-5 mt-4 lg:ml-48 lg:mt-12">
          <MainTitle>КОНТАКТЫ</MainTitle>
        </div>
      </Layout>

      <main className="flex flex-col gap-9 px-5 py-20 lg:flex-row lg:justify-between lg:px-48">
        <div className="flex flex-col gap-8 lg:gap-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-4xl">
            КРУГЛОСУТОЧНАЯ СТОЙКА РЕГИСТРАЦИИ
          </h2>

          <div>
            <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-4xl">
              8-993-610-68-92
            </h2>
            <p className="text-accent">Звонки с 10:00 до 22:00</p>
          </div>

          <div className="flex gap-6">
            <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-4xl">
              WhatsApp
            </h2>

            <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-4xl">
              Telegram
            </h2>
          </div>

          <div>
            <h2 className="mb-6 font-serif text-2xl font-bold text-white md:text-4xl">
              НАШ АДРЕС
            </h2>
            <p className="mb-6 font-serif text-white">
              Россия, Калужская область, Тарусский район, сельское поселение
              Волковское, база отдыха «Крутой Яр»
            </p>
            <Button title="Построить маршрут" />
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-serif text-lg font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
            bazakrutoyar@yandex.ru
          </h3>
          <p className="text-accent my-6">Задать вопрос, написать отзыв</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
