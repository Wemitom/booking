import Image from 'next/image';
import spa from 'public/images/spa.png';

import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SectionTitle from '@/components/common/typography/SectionTitle';

const SpaSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="mb-8 flex flex-col gap-14 lg:justify-between lg:px-48 xl:flex-row xl:items-center">
        <div className="xl:w-1/3">
          <SectionTitle>РУССКАЯ БАНЯ НА ДРОВАХ С БАССЕЙНОМ</SectionTitle>
        </div>

        <div className="xl:w-2/3 xl:pt-12">
          <DescriptionMain>
            Русская баня в сосновом лесу. Растопка дровами — приятный треск
            бревен, аромат и завораживающая игра пламени с эффектом камина
            помогут расслабить не только тело ,но и разум. Уютная комната отдыха
            в Русском стиле с небольшой кухонной зоной для полного комфорта
            гостей. Уличный бассейн с холодной водой под навесом на летней
            веранде — из жара в холод! Имеется мангальная зона, бесплатный
            Wi-Fi, доставка из кафе-бара на территории.
          </DescriptionMain>
        </div>
      </div>

      <Image src={spa} alt="spa" />
    </section>
  );
};

export default SpaSection;
