import Image from 'next/image';
import arrow from 'public/images/arrow.svg';

import useSelect from '@/utils/hooks/useSelect';

const CircleButton = ({
  options,
  left
}: {
  options: readonly string[];
  left?: boolean;
}) => {
  const { chosen, setChosen } = useSelect();

  return (
    <button
      className="flex h-24 w-24 items-center justify-center rounded-full border border-accent"
      onClick={() => {
        const curOption = options.indexOf(chosen);

        if (setChosen) {
          if (curOption === 0 && left) setChosen(options[options.length - 1]);
          else if (curOption === options.length - 1 && !left)
            setChosen(options[0]);
          else if (left) setChosen(options[curOption - 1]);
          else setChosen(options[curOption + 1]);
        }
      }}
    >
      <Image
        src={arrow}
        alt={left ? 'arrow_left' : 'arrow_right'}
        style={left ? undefined : { transform: 'rotate(180deg)' }}
      />
    </button>
  );
};

const Controls = ({ options }: { options: readonly string[] }) => {
  return (
    <div className="mt-6 flex gap-20">
      <CircleButton options={options} left />
      <CircleButton options={options} />
    </div>
  );
};

export default Controls;
