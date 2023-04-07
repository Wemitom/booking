import { useState } from 'react';

import Image from 'next/image';
import location from 'public/images/locationHollow.svg';

import CircleButton from '@/components/common/CircleButton';
import { Sights, sights, sightsShow } from '@/utils/constants';
import { classNames } from '@/utils/functions';

const SightsSections = () => {
  const [curPos, setCurPos] = useState<Sights[number]>('Манжерок');
  const handleClick = (left?: boolean) => {
    const curPosI = sights.indexOf(curPos);

    if (curPosI === 0 && left) setCurPos(sights[sights.length - 1]);
    else if (curPosI === sights.length - 1 && !left) setCurPos(sights[0]);
    else if (left) setCurPos(sights[curPosI - 1]);
    else setCurPos(sights[curPosI + 1]);
  };

  return (
    <section className="mt-16 overflow-hidden">
      <h2 className="mt-12 px-5 font-inter text-4xl font-bold text-accent md:w-2/3 md:text-6xl lg:px-48">
        <p>ЗНАКОВЫЕ МЕСТА АЛТАЯ</p>
      </h2>

      <div className="mt-8 flex flex-row items-center gap-5 px-5 lg:px-48">
        <div className="hidden h-0 w-[45px] border-2 border-accent lg:block" />
        <p className="text-3xl font-bold text-white">{curPos.toUpperCase()}</p>
      </div>

      <div className="flex flex-col-reverse gap-5 px-5 font-inter text-white lg:h-96 lg:flex-row lg:px-48">
        <div>
          <p className="pt-6">{sightsShow[curPos].description}</p>

          <div className="mt-12 flex justify-center gap-20 lg:justify-normal">
            <CircleButton handleClick={() => handleClick(true)} left />
            <CircleButton handleClick={() => handleClick()} />
          </div>
        </div>

        <Image
          src={sightsShow[curPos].src}
          alt={curPos}
          className="w-full lg:max-w-[50%]"
        />
      </div>

      <div className="relative mt-32 flex h-12 w-full items-center">
        <div className="absolute top-3 h-px w-[999999px] bg-accent" />
        {sights.map((sight, i) => (
          <div
            key={sight}
            className="absolute left-12 flex flex-col items-center transition-transform md:left-20 lg:left-64"
            style={{
              transform: `translateX(${14 * (i - sights.indexOf(curPos))}rem)`
            }}
          >
            {curPos === sight && (
              <Image
                src={location}
                alt="location"
                className="absolute -top-10 fill-transparent"
              />
            )}
            <div
              className={classNames(
                'rounded-full transition-colors duration-300',
                curPos === sight
                  ? 'h-6 w-6 bg-accent'
                  : 'h-6 w-6 bg-[#d9d9d9]/50'
              )}
            />
            <p
              className={classNames(
                'text-inter transition-colors duration-300',
                curPos === sight ? 'text-accent' : 'text-white'
              )}
            >
              {sight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SightsSections;
