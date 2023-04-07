import { classNames } from '@/utils/functions';

type Sizes = 'normal' | 'full';
const sizes: Record<Sizes, string> = {
  normal: 'w-[280px]',
  full: 'w-full'
};

const Button = ({
  title,
  size = 'normal',
  filled
}: {
  title: string;
  size?: Sizes;
  filled?: boolean;
}) => {
  return (
    <button
      className={classNames(
        'text-white p-4 text-center !flex-grow-0 font-inter',
        filled ? 'bg-accent' : 'bg-transparent border border-accent',
        sizes[size]
      )}
    >
      {title}
    </button>
  );
};

export default Button;
