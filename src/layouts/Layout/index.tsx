import Image from 'next/image';

import FindRoom from '@/components/common/FindRoom';
import Header from '@/components/common/Header';
import SidebarControlls from '@/components/common/SidebarControlls';
import { links } from '@/utils/constants';

const Layout = ({
  children,
  src,
  renderFindRoom
}: {
  children: JSX.Element | JSX.Element[];
  src: string;
  renderFindRoom?: boolean;
}) => {
  return (
    <>
      <SidebarControlls values={links}>
        <Header />
      </SidebarControlls>

      <section className="relative min-h-screen w-auto">
        <Image
          priority
          src={src}
          alt="main_img"
          className="object-cover"
          fill
        />

        <div className="pt-32 sm:pt-44">{children}</div>

        {renderFindRoom && <FindRoom />}

        <div
          className="absolute bottom-0 z-10 h-full w-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(68, 81, 57, 0) 52.17%, #445139 100%)'
          }}
        />
        <div className="absolute bottom-0 z-0 h-full w-full bg-black/70" />
      </section>
    </>
  );
};

export default Layout;
