import Head from 'next/head';

import Footer from '@/components/common/Footer';
import CommentsSection from '@/landing/CommentSection';
import ExperiencesSection from '@/landing/ExpiriencesSection';
import IntroSection from '@/landing/IntroSection';
import LivingOptionsSection from '@/landing/LivingOptionsSection';
import RestaurantsSection from '@/landing/RestaurantsSection';
import SightsSections from '@/landing/SightsSection';
import SpaSection from '@/landing/SpaSection';
import TourSection from '@/landing/TourSection';
import TransferSection from '@/landing/TransferSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Grand Chalet Altay</title>
        <meta
          name="description"
          content="В сосновом бору на берегу реки Ока, расположилась уютная база отдыха «Крутой Яр». Отдыхающих ждет чистый воздух и уютные одноэтажные бревенчатые домики, прекрасное место и для любителей рыбалки."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/images/landingMainDesk.png"
          as="image"
          media="(min-width: 640px)"
        />
        <link
          rel="preload"
          href="/images/landingMainPhone.png"
          as="image"
          media="(max-width: 639px)"
        />
      </Head>

      <IntroSection />

      <main>
        <TourSection />
        <LivingOptionsSection />
        <SpaSection />
        <RestaurantsSection />
        <ExperiencesSection />
        <SightsSections />
        <CommentsSection />
        <TransferSection />
      </main>

      <Footer />
    </>
  );
}
