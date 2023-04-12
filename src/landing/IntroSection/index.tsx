import Image from 'next/image';

import FindRoom from '@/components/common/FindRoom';
import Header from '@/components/common/Header';
import SidebarControlls from '@/components/common/SidebarControlls';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import MainTitle from '@/components/common/typography/MainTitle';
import Layout from '@/layouts/Layout';

const IntroSection = () => {
  return (
    <Layout src="/images/landingMainDesk.png" renderFindRoom>
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
    </Layout>
  );
};

export default IntroSection;
