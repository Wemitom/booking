import Image from 'next/image';

import FindRoom from '@/components/common/FindRoom';
import Header from '@/components/common/Header';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import MainTitle from '@/components/common/typography/MainTitle';

const IntroSection = () => {
  return (
    <section className="relative min-h-screen w-auto">
      <Header />
      <Image
        priority
        src="/images/landingMainDesk.png"
        alt="landing_img"
        className="object-cover"
        fill
      />
      <div className="relative z-10 ml-5 mt-4 text-white lg:ml-48">
        <MainTitle>
          <p>GRAND</p>
          <p>CHALET</p>
          <p>ALTAY</p>
        </MainTitle>
        <div className="mt-8 flex flex-row items-center gap-5">
          <div className="border-accent hidden h-0 w-[45px] border-2 lg:block" />
          <DescriptionMain>
            Пять звёзд в окружении гор на берегу Катуни
          </DescriptionMain>
        </div>
      </div>

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
  );
};

export default IntroSection;
