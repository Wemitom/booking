import Image from 'next/image';

const Header = () => {
  return (
    <header className="absolute flex w-full flex-row items-center px-7 py-[34px] text-white">
      <div className="flex flex-row">
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

        <p>Ресторан &#34;Сосны&#34;</p>

        <p>Горнолыжный отдых</p>

        <p>Контакты</p>
      </nav>

      <div className="ml-auto hidden sm:block">
        <address className="not-italic">8-800-1000-540</address>
        <p className="text-accent">Бесплатно по РФ</p>
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

      <button className="ml-9">
        <Image
          priority
          src="/images/hamburger.svg"
          alt="whatsapp"
          width={64.22}
          height={16.56}
        />
      </button>
    </header>
  );
};

export default Header;
