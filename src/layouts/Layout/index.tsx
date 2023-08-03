import Image from 'next/image';
import { ToastContainer } from 'react-toastify';

import FindRoom from '@/components/common/FindRoom';
import Header from '@/components/common/Header';
import SidebarControlls from '@/components/common/SidebarControlls';
import { links } from '@/utils/constants';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({
  children,
  src,
  video,
  renderFindRoom
}: {
  children: JSX.Element | JSX.Element[];
  src: string;
  video?: boolean;
  renderFindRoom?: boolean;
}) => {
  return (
    <>
      <SidebarControlls values={links}>
        <Header />
      </SidebarControlls>

      <section className="relative min-h-screen w-auto">
        {video ? (
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 max-h-[100dvh] min-w-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <Image
            priority
            src={src}
            alt="main_img"
            className="object-cover"
            fill
          />
        )}

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

      {renderFindRoom && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
    </>
  );
};

export default Layout;
