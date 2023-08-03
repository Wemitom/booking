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
  onClick,
  submit
}: {
  title: string;
  size?: Sizes;
  filled?: boolean;
  onClick?: () => void;
  submit?: boolean;
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={classNames(
        'text-white p-4 text-center !flex-grow-0 font-serif transition-colors',
        filled
          ? 'bg-accent hover:bg-accent/90'
          : 'bg-transparent border border-accent hover:bg-accent',
        sizes[size]
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
