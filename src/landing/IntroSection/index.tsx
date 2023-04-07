import FindRoom from '@/components/common/FindRoom';
import Header from '@/components/common/Header';

const IntroSection = () => {
  return (
    <section className="relative min-h-screen w-auto bg-landingPhone bg-cover bg-center bg-no-repeat sm:bg-landingDesk">
      <Header />
      <div className="relative z-10 ml-5 mt-4 text-white lg:ml-48">
        <h1 className="text-5xl font-extrabold !leading-snug lg:text-7xl 3xl:text-8xl">
          GRAND
          <br />
          CHALET
          <br />
          ALTAY
        </h1>
        <div className="mt-8 flex flex-row items-center gap-5">
          <div className="hidden h-0 w-[45px] border-2 border-accent lg:block" />
          <p>Пять звёзд в окружении гор на берегу Катуни</p>
        </div>
      </div>

      <FindRoom />

      <div
        className="absolute bottom-0 z-0 hidden h-full w-full lg:block"
        style={{
          background:
            'linear-gradient(180deg, rgba(68, 81, 57, 0) 52.17%, #445139 100%)'
        }}
      />
    </section>
  );
};

export default IntroSection;
