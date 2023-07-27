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
import SectionTitle from '../typography/SectionTitle';

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
  const [containerWidth, setContainerWidth] = useState(0);
  const [imgWidth, setImgWidth] = useState(600);
  const [imageLoaded, setImageLoaded] = useState(false);

  const ref = useRef<HTMLImageElement | null>(null);
  const refContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const changeSize = () => {
      ref.current && setImgWidth(ref.current.clientWidth);
      refContainer.current &&
        setContainerWidth(refContainer.current.clientWidth);
    };

    if (window && imageLoaded) {
      window.addEventListener('resize', changeSize);
      changeSize();
    }

    return () => {
      window.removeEventListener('resize', changeSize);
    };
  }, [imageLoaded]);

  return (
    <HeroSliderContext.Provider
      value={{ curSlide, setCurSlide, length: images.length }}
    >
      <div className="flex flex-row justify-between">
        <div className="mb-12 px-5 lg:px-48">
          <SectionTitle>ФОТОГАЛЕРЕЯ</SectionTitle>
        </div>
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
            }px)`
          }}
        >
          {images.map((slide, i) => (
            <Image
              src={slide}
              ref={ref}
              width={600}
              alt={'slide_' + i}
              key={'slide_' + i}
              onLoad={() => setImageLoaded(true)}
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
