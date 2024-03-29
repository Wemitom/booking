import Head from 'next/head';

import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import ExperiencesSection from '@/landing/ExpiriencesSection';
import IntroSection from '@/landing/IntroSection';
import LivingOptionsSection from '@/landing/LivingOptionsSection';
import RestaurantsSection from '@/landing/RestaurantsSection';
import SpaSection from '@/landing/SpaSection';
import TourSection from '@/landing/TourSection';
import TransferSection from '@/landing/TransferSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>База отдыха Крутой Яр</title>
        <meta
          name="description"
          content="В сосновом бору на берегу реки Ока, расположилась уютная база отдыха «Крутой Яр». Отдыхающих ждет чистый воздух и уютные одноэтажные бревенчатые домики, прекрасное место и для любителей рыбалки."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroSection />

      <main>
        <TourSection />
        <LivingOptionsSection />
        <SpaSection />
        <RestaurantsSection />
        <ExperiencesSection />
        <TransferSection />

        <div className="my-16 flex justify-center">
          <Button
            title="Забронировать"
            filled
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
