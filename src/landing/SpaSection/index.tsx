import Image from 'next/image';
import spa from 'public/images/spa.png';

import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SecondaryTitle from '@/components/common/typography/SecondaryTitle';
import SectionTitle from '@/components/common/typography/SectionTitle';

const SpaSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="mb-8 flex flex-col gap-10 lg:justify-between lg:px-48 xl:flex-row xl:items-center">
        <div className="xl:w-1/3">
          <SectionTitle>КРУПНЕЙШИЙ SPA В ГОРАХ АЛТАЯ</SectionTitle>
        </div>

        <div className="xl:w-1/2 xl:pt-12">
          <DescriptionMain>
            В 2023 году на территории GRAND CHALET ALTAY планируется запуск
            современного SPA-комплекса площадью 2 550 м2, где для гостей будут
            доступны разнообразные процедуры для отдыха и восстановления. Здесь
            вы сможете не только ощутить полный релакс, но и поправить здоровье.
          </DescriptionMain>
        </div>
      </div>

      <Image src={spa} alt="spa" />

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:px-36 [&>*]:flex [&>*]:flex-col [&>*]:gap-3 [&>*]:lg:px-8">
        <div>
          <SecondaryTitle>5 парных</SecondaryTitle>
          <DescriptionMain>
            помогут снять усталось и получить наслаждение от правильного пара
          </DescriptionMain>
        </div>

        <div className="hidden w-0 border-white/40 !p-0 lg:block lg:h-12 lg:border" />

        <div>
          <SecondaryTitle>16 программ</SecondaryTitle>
          <DescriptionMain>
            вдохнут в тело новую энергию и поднимут настроение
          </DescriptionMain>
        </div>

        <div className="hidden w-0 border-white/40 !p-0 lg:block lg:h-12 lg:border" />

        <div>
          <SecondaryTitle>20 метров</SecondaryTitle>
          <DescriptionMain>
            составляет длина крытого бассейна, для любителей активного отдыха
          </DescriptionMain>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;
