import DescriptionMain from '@/components/common/typography/DescriptionMain';

const FeaturesSection = ({ feature }: { feature: string }) => {
  return (
    <section className="px-5 lg:px-48">
      <div className="mt-12 flex flex-col gap-16 lg:flex-row">
        <div className="text-white">
          <DescriptionMain>{feature}</DescriptionMain>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
