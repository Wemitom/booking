import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { classNames } from '@/utils/functions';

const Header = () => {
  const { push } = useRouter();
  const [open, setOpen] = useState<boolean | null>(null); // Null means hamburger hasnt been clicked

  return (
    <header className="relative z-20 flex h-[104px] w-full flex-row items-center px-7 py-[34px] font-semibold text-white sm:h-[140px]">
      <div className="flex cursor-pointer flex-row" onClick={() => push('/')}>
        <Image
          priority
          className="h-auto w-[38px] sm:w-[72px]"
          src="images/logoSVG.svg"
          width={72}
          height={72}
          alt="logo"
        />
        <Image
          priority
          className="ml-3 h-auto w-[43px] sm:w-20"
          src="images/logoWord.svg"
          width={54}
          height={80}
          alt="logo"
        />
      </div>

      <nav className="ml-16 hidden flex-row gap-14 xl:flex">
        <p>Проживание</p>

        <Link href="/restaurant">Ресторан &#34;Сосны&#34;</Link>

        <p>Горнолыжный отдых</p>

        <Link href="/about">Контакты</Link>
      </nav>

      <div className="ml-auto hidden sm:block">
        <address className="font-inter font-normal not-italic">
          8-800-1000-540
        </address>
        <p className="text-accent font-normal">Бесплатно по РФ</p>
      </div>

      <button className="ml-auto sm:ml-9">
        <Image
          priority
          src="/images/whatsapp.svg"
          alt="whatsapp"
          width={27}
          height={27}
        />
      </button>

      <button
        className="ml-9 flex flex-col gap-2"
        onClick={() => setOpen(!open)}
      >
        <span
          className={classNames(
            'h-1 w-16 bg-white',
            typeof open === 'boolean'
              ? open
                ? 'animate-cross-top'
                : 'animate-hamburger-top'
              : ''
          )}
        />
        <span
          className={classNames(
            'h-1 w-11 bg-white',
            typeof open === 'boolean'
              ? open
                ? 'animate-cross-bottom'
                : 'animate-hamburger-bottom'
              : ''
          )}
        />
      </button>
    </header>
  );
};

export default Header;
