import { classNames } from '@/utils/functions';
import useSidebar from '@/utils/hooks/useSidebar';

const Sidebar = ({
  values
}: {
  values: { name: string; content: { text: string; link: null | string }[] }[];
}) => {
  const { show } = useSidebar();

  return (
    <div
      className={classNames(
        'bg-bottom bg-no-repeat h-full sm:bg-deskVector bg-phoneVector grow bg-contain',
        typeof show === 'boolean'
          ? show
            ? 'animate-fade-in'
            : 'animate-fade-out hidden'
          : 'hidden'
      )}
    ></div>
  );
};

export default Sidebar;
