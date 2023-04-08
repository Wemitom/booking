import { classNames } from '@/utils/functions';

type Sizes = 'normal' | 'full';
const sizes: Record<Sizes, string> = {
  normal: 'w-[280px]',
  full: 'w-full'
};

const Button = ({
  title,
  size = 'normal',
  filled,
  onClick
}: {
  title: string;
  size?: Sizes;
  filled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={classNames(
        'text-white p-4 text-center !flex-grow-0 font-inter',
        filled ? 'bg-accent' : 'bg-transparent border border-accent',
        sizes[size]
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
