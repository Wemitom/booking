import { useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import arrowFilled from 'public/images/arrow.svg';
import arrow from 'public/images/arrowWhite.svg';

import { classNames } from '@/utils/functions';
import useSidebar from '@/utils/hooks/useSidebar';

const Sidebar = ({
  values
}: {
  values: { name: string; content: { text: string; link: null | string }[] }[];
}) => {
  const { show } = useSidebar();
  const names = useMemo(() => values.map((value) => value.name), [values]);
  type Names = (typeof names)[number];
  const [chosenName, setChosenName] = useState<Names>();

  const getList = (phone?: boolean) => {
    return (
      <ul className={classNames(phone ? 'lg:hidden' : 'hidden lg:block')}>
        {chosenName &&
          values
            .find((value) => value.name === chosenName)
            ?.content.map((item) => (
              <li
                key={item.text}
                className={classNames(
                  'mb-3',
                  item.link ? 'cursor-pointer text-white' : 'text-white/50'
                )}
              >
                {item.link ? (
                  <Link href={item.link}>{item.text}</Link>
                ) : (
                  item.text
                )}
              </li>
            ))}
      </ul>
    );
  };

  return (
    <div
      aria-hidden={!show}
      className={classNames(
        'bg-bottom bg-no-repeat h-full sm:bg-deskVector bg-phoneVector grow bg-contain overflow-auto',
        typeof show === 'boolean'
          ? show
            ? 'animate-fade-in'
            : 'animate-fade-out hidden'
          : 'hidden'
      )}
    >
      <div className="flex flex-row px-5 md:gap-12 lg:px-48">
        <div>
          {names.map((name) => (
            <div className="flex flex-col" key={name}>
              <div
                className="mb-6 flex gap-12"
                onMouseEnter={() => setChosenName(name)}
                onClick={() => setChosenName(name)}
              >
                <p
                  className={classNames(
                    'my-2 text-3xl font-bold',
                    chosenName === name ? 'text-accent' : 'text-white'
                  )}
                >
                  {name.toUpperCase()}
                </p>
                <Image
                  src={name !== chosenName ? arrow : arrowFilled}
                  alt="arrow"
                  className="rotate-180"
                />
              </div>

              {name === chosenName && getList(true)}
            </div>
          ))}
        </div>

        {getList()}
      </div>
    </div>
  );
};

export default Sidebar;
