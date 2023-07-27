import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { classNames, threeStateBool } from '@/utils/functions';
import useSidebar from '@/utils/hooks/useSidebar';

const Header = () => {
  const { push } = useRouter();
  const { show, setShow } = useSidebar(); // Null means burger hasnt been clicked

  return (
    <header
      className={classNames(
        'relative z-20 flex h-[104px] w-full flex-row items-center px-7 py-[34px] font-semibold text-white sm:h-[140px]'
      )}
    >
      <div className="flex cursor-pointer flex-row" onClick={() => push('/')}>
        <Image
          priority
          className="h-auto w-[70px] sm:w-[100px]"
          src="/images/logo.png"
          width={200}
          height={200}
          alt="logo"
        />
      </div>

      <nav
        className={classNames(
          'ml-16 hidden flex-row gap-14 xl:flex',
          typeof show === 'boolean'
            ? show
              ? 'animate-fade-out'
              : 'animate-fade-in'
            : ''
        )}
      >
        <p>Проживание</p>

        <Link href="/restaurant">Кафе-Бар</Link>

        <p>Русская баня</p>

        <p>Летние развлечения</p>

        <Link href="/about">Контакты</Link>
      </nav>

      <div
        className={classNames(
          'flex flex-row ml-auto',
          typeof show === 'boolean'
            ? show
              ? 'animate-fade-out'
              : 'animate-fade-in'
            : ''
        )}
      >
        <div className="hidden sm:block">
          <address className="font-inter font-normal not-italic">
            8-993-610-68-92
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
      </div>

      <button
        className="[&>span]:hover:bg-accent ml-9 flex flex-col gap-2"
        onClick={() => {
          if (setShow) {
            window.scrollTo({ top: 0 });
            setShow(!show);
          }
        }}
      >
        <span
          className={classNames(
            'h-1 w-16 bg-white transition-colors duration-300',
            threeStateBool(
              show,
              'animate-cross-top',
              'animate-hamburger-top',
              ''
            )
          )}
        />
        <span
          className={classNames(
            'h-1 w-11 bg-white transition-colors duration-300',
            threeStateBool(
              show,
              'animate-cross-bottom',
              'animate-hamburger-bottom',
              ''
            )
          )}
        />
      </button>
    </header>
  );
};

export default Header;
