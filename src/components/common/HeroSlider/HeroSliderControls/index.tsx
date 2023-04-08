import { useContext } from 'react';

import { HeroSliderContext } from '..';
import CircleButton from '../../CircleButton';

const HeroSliderControls = () => {
  const { curSlide, setCurSlide, length } = useContext(HeroSliderContext);
  const handleClick = (left?: boolean) => {
    if (setCurSlide) {
      if (curSlide === 0 && left) setCurSlide(length - 1);
      else if (curSlide === length - 1 && !left) setCurSlide(0);
      else if (left) setCurSlide(curSlide - 1);
      else setCurSlide(curSlide + 1);
    }
  };

  return (
    <div className="mt-6 flex gap-20">
      <CircleButton handleClick={() => handleClick(true)} left />
      <CircleButton handleClick={() => handleClick()} />
    </div>
  );
};

export default HeroSliderControls;
