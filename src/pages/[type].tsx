import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { StaticImageData } from 'next/image';

import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import HeroSlider from '@/components/common/HeroSlider';
import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import MainTitle from '@/components/common/typography/MainTitle';
import BookingSection from '@/components/livingVariant/BookingSection';
import FeaturesSection from '@/components/livingVariant/FeaturesSection';
import OtherSuitSection from '@/components/livingVariant/OtherSuitSection';
import Layout from '@/layouts/Layout';
import { Variants, variants, variantsPreview } from '@/utils/constants';

export default function LivingOption({
  description,
  feature,
  srcMain,
  heroSlider,
  fullName,
  size,
  cost
}: {
  description: string[];
  feature: string;
  src: StaticImageData;
  srcMain: StaticImageData;
  heroSlider: StaticImageData[];
  fullName: string;
  size: number;
  cost: number;
}) {
  return (
    <>
      <Head>
        <title>{fullName}</title>
      </Head>

      <Layout src={srcMain.src}>
        <div className="relative z-20 mx-5 mt-4 lg:mx-48 lg:mt-12">
          <div className="flex flex-col gap-12 xl:flex-row">
            <div>
              <MainTitle>{fullName.toUpperCase()}</MainTitle>

              <div className="mt-6">
                {description.map((line, i) => (
                  <DescriptionSecondary key={'line_' + i}>
                    {line}
                  </DescriptionSecondary>
                ))}
              </div>

              <div className="mt-3 flex gap-3">
                <Badge>
                  <>{size} м2</>
                </Badge>
                <Badge>
                  <>от {cost}Р</>
                </Badge>
              </div>
            </div>

            <div className="xl:bg-transperent flex h-fit justify-center xl:relative xl:-bottom-52 xl:block xl:w-[600px] xl:px-6 xl:py-3">
              <div className="relative w-full">
                <Button title="Забронировать" size="full" filled />
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <main>
        <section className="mt-16">
          <HeroSlider key={fullName} images={heroSlider} />
        </section>

        <FeaturesSection feature={feature} />
        <BookingSection />
        <OtherSuitSection fullName={fullName} />
      </main>

      <Footer />
    </>
  );
}

export function getStaticPaths() {
  const paths = variants.map((variant) => {
    return {
      params: {
        type: variantsPreview[variant].fullName
      }
    };
  });

  return { paths, fallback: false };
}

export function getStaticProps(context: GetStaticPropsContext) {
  const fullname = decodeURIComponent(context.params?.type as string);
  const type = variants.find(
    (variant) => variantsPreview[variant].fullName === fullname
  );

  if (type && variants.includes(type)) {
    return {
      props: {
        ...variantsPreview[decodeURIComponent(type) as Variants[number]]
      }
    };
  } else {
    return { props: {} };
  }
}
