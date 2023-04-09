import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import SectionTitle from '@/components/common/typography/SectionTitle';
import { variants, variantsPreview } from '@/utils/constants';

const OtherSuitSection = ({ fullName }: { fullName: string }) => {
  const otherSuit =
    variantsPreview[
      variants.find(
        (variant) => variantsPreview[variant].fullName !== fullName
      )!
    ];
  const { push } = useRouter();

  return (
    <section className="px-5 lg:px-48">
      <div className="mb-12">
        <SectionTitle>ДРУГОЙ КОТТЕДЖ</SectionTitle>
      </div>

      <Image src={otherSuit.src} alt={otherSuit.fullName} />
      <h3 className="my-8 text-3xl font-extrabold text-white md:text-4xl xl:text-5xl">
        {otherSuit.fullName.toUpperCase()}
      </h3>
      <div className="mb-8">
        {otherSuit.description.map((line, i) => (
          <DescriptionSecondary key={'line_' + i}>{line}</DescriptionSecondary>
        ))}
      </div>
      <div className="mb-14">
        <Button
          title="Смотреть"
          onClick={() => push('/' + encodeURI(otherSuit.fullName))}
          filled
        />
      </div>
    </section>
  );
};

export default OtherSuitSection;
