import Image from 'next/image';
import arrow from 'public/images/arrow.svg';

const CircleButton = ({
  handleClick,
  left
}: {
  handleClick: () => void;
  left?: boolean;
}) => {
  return (
    <button
      className="border-accent hover:border-accent/60 flex h-24 w-24 items-center justify-center rounded-full border transition-colors"
      onClick={handleClick}
    >
      <Image
        src={arrow}
        alt={left ? 'arrow_left' : 'arrow_right'}
        style={left ? undefined : { transform: 'rotate(180deg)' }}
      />
    </button>
  );
};

export default CircleButton;
