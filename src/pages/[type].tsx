import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';

import Button from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HeroSlider from '@/components/common/HeroSlider';
import BookingSection from '@/components/livingVariant/BookingSection';
import FeaturesSection from '@/components/livingVariant/FeaturesSection';
import OtherSuitSection from '@/components/livingVariant/OtherSuitSection';
import { Variants, variants, variantsPreview } from '@/utils/constants';

export default function LivingOption({
  description,
  src,
  fullName
}: {
  description: string[];
  src: StaticImageData;
  fullName: string;
}) {
  return (
    <>
      <Head>
        <title>{fullName}</title>
      </Head>

      <section className="relative min-h-screen w-auto">
        <Header />

        <Image
          priority
          src={src}
          alt="living_variant"
          className="object-cover"
          fill
        />

        <div className="relative z-20 mx-5 mt-4 lg:mx-48 lg:mt-12">
          <div className="flex flex-col gap-12 xl:flex-row">
            <div>
              <h1 className="text-5xl font-extrabold !leading-snug text-white lg:text-7xl 3xl:text-8xl">
                {fullName.toUpperCase()}
              </h1>

              <div className="mt-6 font-inter text-white">
                {description.map((line, i) => (
                  <p key={'line_' + i}>{line}</p>
                ))}
              </div>
            </div>

            <div className="flex h-fit justify-center xl:relative xl:-bottom-52 xl:block xl:w-[600px] xl:bg-white xl:px-6 xl:py-3">
              <div className="relative w-full">
                <Button title="Забронировать" size="full" filled />
                {/* <Image
                  priority
                  src="/images/calendar.svg"
                  width={22.5}
                  height={24}
                  alt="calendar"
                  className="absolute right-5 bottom-5"
                /> */}
              </div>

              <div className="my-6 hidden font-inter xl:block">
                <p className="my-6 font-medium">Включенные услуги:</p>

                <ul className="[&>li]:list-inside [&>li]:list-disc">
                  <li>Завтрак в ресторане «Сосны»</li>
                  <li>Меню подушек и одеял</li>
                  <li>Вечерний сервис</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 z-10 h-full w-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(68, 81, 57, 0) 52.17%, #445139 100%)'
          }}
        />
        <div className="absolute bottom-0 z-0 h-full w-full bg-black/70" />
      </section>

      <main>
        <section className="mt-16">
          <HeroSlider images={[src, src, src]} />
        </section>

        <FeaturesSection />
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
