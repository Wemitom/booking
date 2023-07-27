import DescriptionMain from '@/components/common/typography/DescriptionMain';
import MainTitle from '@/components/common/typography/MainTitle';
import Layout from '@/layouts/Layout';

const IntroSection = () => {
  return (
    <Layout src="/images/landingMain.MOV" video renderFindRoom>
      <div className="relative z-10 ml-5 mt-4 text-white lg:ml-48">
        <MainTitle>
          <p>БАЗА ОТДЫХА</p>
          <p>КРУТОЙ ЯР</p>
        </MainTitle>
        <div className="mt-8 flex flex-row items-center gap-5">
          <div className="border-accent hidden h-0 w-[45px] border-2 lg:block" />
          <DescriptionMain>Коттеджи на берегу Оки</DescriptionMain>
        </div>
      </div>
    </Layout>
  );
};

export default IntroSection;
