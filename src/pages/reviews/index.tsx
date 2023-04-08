import Head from 'next/head';
import Image from 'next/image';
import Masonry from 'react-masonry-css';

import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Review from '@/components/reviews/Review';
import { comments } from '@/utils/constants';

export default function Reviews() {
  const renderReviews = () => {
    let reviewInd = 0;

    return comments.map((comment) => {
      reviewInd += reviewInd === 4 ? -reviewInd : 1;

      return (
        <Review
          key={comment.id}
          {...comment}
          small={reviewInd === 1 || reviewInd === 4}
        />
      );
    });
  };

  return (
    <>
      <Head>
        <title>Отзывы</title>
      </Head>

      <section className="relative min-h-screen w-auto">
        <Header />

        <Image
          priority
          src="/images/landingMainDesk.png"
          alt="about_img"
          className="object-cover"
          fill
        />

        <h1 className="relative z-20 ml-5 mt-4 text-5xl font-extrabold !leading-snug text-white lg:ml-48 lg:mt-12 lg:text-7xl 3xl:text-8xl">
          ОТЗЫВЫ О НАС
        </h1>

        <div
          className="absolute bottom-0 z-10 h-full w-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(68, 81, 57, 0) 52.17%, #445139 100%)'
          }}
        />
        <div className="absolute bottom-0 z-0 h-full w-full bg-black/70" />
      </section>

      <main className="px-5 lg:px-48">
        <Masonry
          breakpointCols={{ default: 1, 640: 1, 1020: 2, 1330: 1, 4000: 2 }}
          className="flex"
          columnClassName="p-6 [&>*]:mb-6"
        >
          {renderReviews()}
        </Masonry>
      </main>
      <Footer />
    </>
  );
}
