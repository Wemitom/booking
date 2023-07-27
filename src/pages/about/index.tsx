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

      <Layout src="/images/about.png" renderFindRoom>
        <div className="relative z-20 ml-5 mt-4 lg:ml-48 lg:mt-12">
          <MainTitle>КОНТАКТЫ</MainTitle>
        </div>
      </Layout>

      <main className="flex flex-col gap-9 px-5 py-20 lg:flex-row lg:justify-between lg:px-48">
        <div className="flex flex-col gap-8 lg:gap-16">
          <div>
            <h2 className="font-inter mb-6 text-4xl font-bold text-white md:text-6xl">
              8-993-6106-892
            </h2>
            <p className="text-accent">Для бронирования (бесплатно по РФ)</p>
          </div>

          <div>
            <h2 className="font-inter mb-6 text-4xl font-bold text-white md:text-6xl">
              WHATSAPP
            </h2>
            <p className="text-accent">Отвечаем круглосуточно, пн-вс</p>
          </div>

          <div>
            <h2 className="font-inter mb-6 text-4xl font-bold text-white md:text-6xl">
              НАШ АДРЕС
            </h2>
            <p className="font-inter mb-6 text-white">
              Россия, Калужская область, Тарусский район, сельское поселение
              Волковское, база отдыха «Крутой Яр»
            </p>
            <Button title="Построить маршрут" />
          </div>
        </div>

        <div>
          <h3 className="font-inter mb-6 text-xl font-bold text-white sm:text-2xl lg:text-3xl xl:text-4xl">
            ???????@??????.RU
          </h3>
          <p className="text-accent my-6">Задать вопрос, написать отзыв</p>

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
