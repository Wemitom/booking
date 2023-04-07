import useSelect from '@/utils/hooks/useSelect';

import CircleButton from '../../CircleButton';

const Controls = ({ options }: { options: readonly string[] }) => {
  const { chosen, setChosen } = useSelect();
  const handleClick = (left?: boolean) => {
    const curOption = options.indexOf(chosen);

    if (setChosen) {
      if (curOption === 0 && left) setChosen(options[options.length - 1]);
      else if (curOption === options.length - 1 && !left) setChosen(options[0]);
      else if (left) setChosen(options[curOption - 1]);
      else setChosen(options[curOption + 1]);
    }
  };

  return (
    <div className="mt-6 flex gap-20">
      <CircleButton handleClick={() => handleClick(true)} left />
      <CircleButton handleClick={() => handleClick()} />
    </div>
  );
};

export default Controls;
