import Head from 'next/head';
import Masonry from 'react-masonry-css';

import Footer from '@/components/common/Footer';
import MainTitle from '@/components/common/typography/MainTitle';
import Review from '@/components/reviews/Review';
import Layout from '@/layouts/Layout';
import { comments } from '@/utils/constants';

export default function Reviews() {
  const renderReviews = () => {
    let reviewInd = 0;

    return comments.map((comment) => {
      reviewInd += reviewInd === 4 ? -reviewInd : 1;

      return (
        <Review
          key={comment.user}
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

      <Layout src="/images/about.jpg">
        <div className="relative z-20 ml-5 mt-4 lg:ml-48 lg:mt-12">
          <MainTitle>ОТЗЫВЫ О НАС</MainTitle>
        </div>
      </Layout>

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
