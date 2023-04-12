import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react';

import { classNames } from '@/utils/functions';

import Sidebar from './Sidebar';

export const SidebarControllsContext = createContext<{
  show: boolean | null;
  setShow: Dispatch<SetStateAction<boolean | null>> | undefined;
}>({ show: true, setShow: undefined });
SidebarControllsContext.displayName = 'SidebarControllsContext';

const SidebarControlls = ({
  children,
  values
}: {
  children: JSX.Element | JSX.Element[];
  values: { name: string; content: { text: string; link: null | string }[] }[];
}) => {
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    if (show) document.body.classList.add('overflow-y-hidden');
    else document.body.classList.remove('overflow-y-hidden');

    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, [show]);

  return (
    <SidebarControllsContext.Provider value={{ show, setShow }}>
      <div
        className={classNames(
          'flex flex-col w-full absolute top-0 z-30',
          show && 'bg-primary h-screen fixed overflow-y-auto'
        )}
      >
        {children}
        <Sidebar values={values} />
      </div>
    </SidebarControllsContext.Provider>
  );
};

export default SidebarControlls;
