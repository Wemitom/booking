import { useEffect, useState } from 'react';

import Image from 'next/image';
import compass from 'public/images/compass.svg';
import experiences from 'public/images/experiences.jpg';

import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Select from '@/components/common/Select';
import DescriptionMain from '@/components/common/typography/DescriptionMain';
import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import SecondaryTitle from '@/components/common/typography/SecondaryTitle';
import SectionTitle from '@/components/common/typography/SectionTitle';
import {
  ExperiencesVariants,
  experiencesNames,
  experiencesVariants
} from '@/utils/constants';
import useSelect from '@/utils/hooks/useSelect';

const Experience = ({
  name,
  handleClick
}: {
  name: string;
  handleClick: () => void;
}) => {
  return (
    <div
      className="border-accent/50 flex h-20 w-60 cursor-pointer flex-col items-center justify-center border px-16 py-5 text-center"
      onClick={handleClick}
    >
      <p className="font-serif text-sm font-medium text-white">{name}</p>
    </div>
  );
};

const Experineces = () => {
  const { chosen } = useSelect();
  const [chosenExperience, setChosenExperience] = useState<{
    name: string;
    src: string;
    description: string | string[];
  } | null>(null);

  useEffect(() => {
    if (chosenExperience) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [chosenExperience]);

  return (
    <>
      <div className="flex gap-6 overflow-x-auto py-6 2xl:flex-wrap 2xl:overflow-x-hidden 2xl:pr-32">
        {experiencesNames[chosen as ExperiencesVariants[number]].map(
          (experience, i) => (
            <Experience
              key={experience.name + i}
              name={experience.name}
              handleClick={() => setChosenExperience(experience)}
            />
          )
        )}
      </div>

      {chosenExperience && (
        <Modal onClose={() => setChosenExperience(null)}>
          <div className="flex grow flex-col items-center gap-6 px-6 py-12">
            <SecondaryTitle>{chosenExperience.name ?? ''}</SecondaryTitle>

            <Image
              src={chosenExperience.src}
              className="h-auto"
              width={300}
              height={300}
              alt={chosenExperience.name}
            />

            <div className="max-w-[50vw]">
              {Array.isArray(chosenExperience.description) ? (
                chosenExperience.description.map((description, i) => (
                  <DescriptionSecondary key={i}>
                    {description}
                  </DescriptionSecondary>
                ))
              ) : (
                <DescriptionSecondary>
                  {chosenExperience.description}
                </DescriptionSecondary>
              )}
            </div>

            <div className="w-8/12">
              <Button
                title="Закрыть"
                size="full"
                onClick={() => setChosenExperience(null)}
                filled
              />
            </div>
          </div>
        </Modal>
      )}
    </>
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
                <div className="mb-12 h-12 align-middle">
                  <SecondaryTitle>
                    Рядом с базой отдыха Крутой Яр
                  </SecondaryTitle>
                </div>

                <DescriptionMain>
                  Мы находимся между городами Серпухов и Таруса, оба города
                  имеют большую историческую ценность. Отдыхающие могут
                  познакомиться ближе с культурой и посетить
                  достопримечательности этих городов. Одни из самых популярных:
                  Тарусская картинная галерея (10 км), Музей семьи Цветаевых (10
                  км), Высоцкий монастырь (24 км), Введенский Владычний женский
                  монастырь (22 км), Соборная гора (21км), Приокско-террасный
                  заповедник (33 км). Мы с радостью подскажем Вам живописные
                  места рядом.
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
