import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useRef,
  useState
} from 'react';

import Image, { StaticImageData } from 'next/image';

import HeroSliderControls from './HeroSliderControls';

export const HeroSliderContext = createContext<{
  curSlide: number;
  setCurSlide: Dispatch<SetStateAction<number>> | undefined;
  length: number;
}>({
  curSlide: 0,
  setCurSlide: undefined,
  length: 0
});
HeroSliderContext.displayName = 'HeroSliderContext';

const HeroSlider = ({ images }: { images: StaticImageData[] }) => {
  const [curSlide, setCurSlide] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const ref = useRef<HTMLImageElement | null>(null);
  const refContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const changeSize = () => {
      ref.current && setImgWidth(ref.current.clientWidth);
      refContainer.current &&
        setContainerWidth(refContainer.current.clientWidth);
    };

    if (window) {
      window.addEventListener('resize', changeSize);
      changeSize();
    }

    return () => {
      window.removeEventListener('resize', changeSize);
    };
  }, []);

  return (
    <HeroSliderContext.Provider
      value={{ curSlide, setCurSlide, length: images.length }}
    >
      <div className="flex flex-row justify-between">
        <h2 className="my-12 px-5 font-inter text-4xl font-bold text-accent md:text-6xl lg:px-48">
          <p>ФОТОГАЛЕРЕЯ</p>
        </h2>
        <div className="mr-48 hidden lg:block">
          <HeroSliderControls />
        </div>
      </div>

      <div className="overflow-x-hidden">
        <div
          ref={refContainer}
          className="relative mb-6 flex gap-24 transition-transform"
          style={{
            transform: `translateX(${
              containerWidth / 2 - curSlide * (imgWidth + 96)
            }px`
          }}
        >
          {images.map((slide, i) => (
            <Image
              src={slide}
              ref={ref}
              alt={'slide_' + i}
              key={'slide_' + i}
              className="-translate-x-1/2"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center lg:hidden">
        <HeroSliderControls />
      </div>
    </HeroSliderContext.Provider>
  );
};

export default HeroSlider;
