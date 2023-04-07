import Image from 'next/image';
import mastercard from 'public/images/mastercard.svg';
import mir from 'public/images/mir.svg';
import sbp from 'public/images/sbp.svg';
import visa from 'public/images/visa.svg';
import Masonry from 'react-masonry-css';

import { variants } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-14 px-5 py-20 font-inter lg:flex-row lg:gap-40 lg:border-t lg:border-accent/50 lg:px-48">
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
          <ul className="leading-loose">
            <li>
              <h4 className="text-xl font-semibold text-accent">Проживание</h4>
            </li>

            {variants.map((variant) => (
              <li
                key={variant}
                className="cursor-pointer text-white"
                role="link"
              >
                {variant}
              </li>
            ))}
          </ul>

          <ul className="leading-loose">
            <li>
              <h4 className="text-xl font-semibold text-accent">Услуги</h4>
            </li>

            <li className="cursor-pointer text-white" role="link">
              Для удобства гостей
            </li>
            <li className="cursor-pointer text-white" role="link">
              Экскурсии
            </li>
            <li className="cursor-pointer text-white" role="link">
              Room-service
            </li>
            <li className="cursor-pointer text-white" role="link">
              Горнолыжный отдых
            </li>
            <li className="cursor-pointer text-white" role="link">
              Прокат
            </li>
            <li className="cursor-pointer text-white" role="link">
              Трансфер
            </li>
            <li className="cursor-pointer text-white" role="link">
              Детский клуб
            </li>
          </ul>

          <ul className="leading-loose">
            <li>
              <h4 className="text-xl font-semibold text-accent">Рестораны</h4>
            </li>

            <li className="cursor-pointer text-white" role="link">
              &#34;Сосны&#34;
            </li>
            <li className="cursor-pointer text-white" role="link">
              &#34;Лес и река&#34;
            </li>
            <li className="cursor-pointer text-white" role="link">
              &#34;Хвоя&#34;
            </li>
            <li className="cursor-pointer text-white" role="link">
              Бар &#34;Керд и пар&#34;
            </li>
            <li className="cursor-pointer text-white" role="link">
              &#34;Огонь&#34;
            </li>
          </ul>

          <ul className="leading-loose">
            <li>
              <h4 className="text-xl font-semibold text-accent">
                Забота о гостях и экологии
              </h4>
            </li>

            <li className="cursor-pointer text-white" role="link">
              Особенности строительства
            </li>
            <li className="cursor-pointer text-white" role="link">
              использование ресурсов
            </li>
            <li className="cursor-pointer text-white" role="link">
              Экологически ответственное и здоровое питание
            </li>
            <li className="cursor-pointer text-white" role="link">
              Поддержка местных сообществ
            </li>
          </ul>

          <ul className="leading-loose">
            <li>
              <h4 className="text-xl font-semibold text-accent">Туркомплекс</h4>
            </li>

            <li className="cursor-pointer text-white" role="link">
              Отзывы
            </li>
            <li className="cursor-pointer text-white" role="link">
              Оплата проживания
            </li>
            <li className="cursor-pointer text-white" role="link">
              Карта территории
            </li>
            <li className="cursor-pointer text-white" role="link">
              Контакты
            </li>
          </ul>
        </Masonry>
      </nav>
    </footer>
  );
};

export default Footer;
