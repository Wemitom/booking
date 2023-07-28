import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SectionTitle from '@/components/common/typography/SectionTitle';

const SpaSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-48">
      <SectionTitle>РУССКАЯ БАНЯ НА ДРОВАХ С БАССЕЙНОМ</SectionTitle>
      <div className="mt-6 flex flex-col items-center gap-14 md:flex-row-reverse md:items-start">
        <DescriptionMain>
          Русская баня в сосновом лесу. Растопка дровами — приятный треск
          бревен, аромат и завораживающая игра пламени с эффектом камина помогут
          расслабить не только тело ,но и разум. Уютная комната отдыха в Русском
          стиле с небольшой кухонной зоной для полного комфорта гостей. Уличный
          бассейн с холодной водой под навесом на летней веранде — из жара в
          холод! Имеется мангальная зона, бесплатный Wi-Fi, доставка из
          кафе-бара на территории.
        </DescriptionMain>

        <video autoPlay loop muted className="max-h-screen">
          <source src="/images/sauna.mov" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default SpaSection;
