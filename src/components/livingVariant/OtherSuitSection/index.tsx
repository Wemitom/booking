import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
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
      <h2 className="my-12 font-inter text-4xl font-bold text-accent md:text-6xl">
        ДРУГОЙ КОТТЕДЖ
      </h2>

      <Image src={otherSuit.src} alt={otherSuit.fullName} />
      <h3 className="my-8 text-5xl font-extrabold text-white">
        {otherSuit.fullName.toUpperCase()}
      </h3>
      <div className="mb-8 text-white">
        {otherSuit.description.map((line, i) => (
          <p key={'line_' + i}>{line}</p>
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
