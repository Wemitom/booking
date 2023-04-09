import Image from 'next/image';
import compass from 'public/images/compass.svg';
import experiences from 'public/images/experiences.png';

import Select from '@/components/common/Select';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import SecondaryTitle from '@/components/common/typography/SecondaryTitle';
import SectionTitle from '@/components/common/typography/SectionTitle';
import {
  ExperiencesVariants,
  experiencesNames,
  experiencesVariants
} from '@/utils/constants';
import useSelect from '@/utils/hooks/useSelect';

const Experience = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className="border-accent/50 flex flex-col items-center border px-16 py-5">
      <Image src={src} alt={name} width={56} height={56} />
      <p className="font-inter text-sm font-medium text-white">{name}</p>
    </div>
  );
};

const Experineces = () => {
  const { chosen } = useSelect();

  return (
    <div className="flex gap-6 overflow-x-auto py-6 2xl:flex-wrap 2xl:overflow-x-hidden 2xl:pr-32">
      {experiencesNames[chosen as ExperiencesVariants[number]].map(
        (experience, i) => (
          <Experience key={experience.name + i} {...experience} />
        )
      )}
    </div>
  );
};

const ExperiencesSection = () => {
  return (
    <section className="mt-16 px-5 lg:px-0">
      <div className="lg:px-48">
        <SectionTitle>ЯРКИЕ ВПЕЧАТЛЕНИЯ</SectionTitle>
      </div>

      <div className="mt-9 flex flex-col-reverse gap-9 2xl:flex-row 2xl:gap-24">
        <div className="2xl:w-1/2">
          <div className="lg:px-48 2xl:px-0">
            <Image src={experiences} alt="experiences" className="w-full" />
          </div>

          <div className="mt-11 lg:px-48 2xl:pl-48 2xl:pr-0">
            <div className="flex items-start gap-4">
              <Image src={compass} alt="compass" />

              <div>
                <div className="mb-3 h-12 align-middle">
                  <SecondaryTitle>
                    Рядом с туркомплексом Grand Chalet Altay
                  </SecondaryTitle>
                </div>
                <DescriptionMain>
                  Вас ожидают невероятные спуски по горам Алтая, заснеженные
                  пики и конечно отдых в приятной компании единомышленников. На
                  горно-лыжных комплексах Алтая доступны склоны разного уровня
                  сложности – как для начинающих, так и для продвинутых, а ваши
                  дети после занятий с профессиональным тренером начнут кататься
                  как взрослые.
                </DescriptionMain>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-48 2xl:w-1/2 2xl:px-0">
          <Select options={experiencesVariants} renderOptions width={6}>
            <Experineces />
          </Select>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
