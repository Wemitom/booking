import Image from 'next/image';
import Link from 'next/link';
import mastercard from 'public/images/mastercard.svg';
import mir from 'public/images/mir.svg';
import sbp from 'public/images/sbp.svg';
import visa from 'public/images/visa.svg';
import Masonry from 'react-masonry-css';

import { links } from '@/utils/constants';
import { classNames } from '@/utils/functions';

const Footer = () => {
  return (
    <footer className="font-inter lg:border-accent/50 flex flex-col gap-14 px-5 py-20 pb-60 lg:border-t lg:px-48 min-[1140px]:flex-row min-[1140px]:gap-40">
      <div className="flex flex-col gap-4 xl:w-1/4">
        <div className="flex flex-row">
          <Image
            className="h-auto w-[38px] sm:w-[72px]"
            src="images/logoSVG.svg"
            width={72}
            height={72}
            alt="logo"
          />
          <Image
            className="ml-3 h-auto w-[43px] sm:w-20"
            src="images/logoWord.svg"
            width={54}
            height={80}
            alt="logo"
          />
        </div>

        <p className="text-sm text-white">
          «Гранд Шале Алтай» — Престижный комплекс на Алтае, расположенный среди
          вековых сосен на самом берегу Катуни.
        </p>

        <div className="flex flex-row gap-3">
          <Image src="/images/phone.svg" alt="phone" width={26} height={26} />

          <div>
            <address className="not-italic text-white">8-800-1000-540</address>
            <p className="text-accent">Бесплатно по РФ</p>
          </div>

          <button className="ml-4">
            <Image
              src="/images/whatsapp.svg"
              alt="whatsapp"
              width={27}
              height={27}
            />
          </button>
        </div>

        <div className="flex flex-row gap-4">
          <Image
            src="/images/location.svg"
            alt="location"
            width={19.5}
            height={26}
          />

          <p className="text-white">
            659636, Россия, Алтайский край, Алтайский район, ОЭЗ Бирюзовская
            Катунь, 31
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <Image src={visa} alt="visa" />
          <Image src={mastercard} alt="mastercard" />
          <Image src={mir} alt="mir" />
          <Image src={sbp} alt="sbp" />
        </div>
      </div>

      <nav className="lg:w-3/4">
        <Masonry
          breakpointCols={{ default: 3, 400: 1, 700: 2, 1024: 3, 1450: 2 }}
          className="flex"
          columnClassName="p-6 [&>*]:mb-6"
        >
          {links.map((link) => (
            <ul key={link.name}>
              <h5 className="text-accent text-xl font-semibold">{link.name}</h5>
              {link.content.map((item) => (
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
          ))}
        </Masonry>
      </nav>
    </footer>
  );
};

export default Footer;
