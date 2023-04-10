import Image from 'next/image';

import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import { classNames, formatDate } from '@/utils/functions';

const Review = ({
  user,
  stars,
  comment,
  date,
  src,
  small
}: {
  user: string;
  stars: number;
  comment: string;
  date: Date;
  src: string;
  small: boolean;
}) => {
  return (
    <div
      className={classNames(
        'w-full bg-secondary py-5 pl-8 pr-3 lg:h-[38rem] lg:px-16 lg:py-11',
        small
          ? 'sm:h-80 min-[1330px]:h-80 h-80'
          : 'sm:h-[38rem] min-[1330px]:h-[38rem] h-80'
      )}
    >
      <div className="flex flex-row">
        <Image
          src={src}
          alt="avatar"
          width={110}
          height={110}
          className="w-[58px] rounded-[35px] lg:w-[110px]"
        />

        <div className="ml-6">
          <p className="font-inter font-semibold text-white">{user}</p>

          <div className="text-accent mt-3 flex gap-1 text-xl sm:text-2xl md:text-3xl">
            {Array.from(Array(5)).map((_, i) =>
              i < stars ? <>&#9733;</> : <>&#9734;</>
            )}
          </div>
        </div>

        <p className="ml-auto text-sm font-light text-white">
          {formatDate(date)}
        </p>
      </div>

      <DescriptionSecondary>{comment}</DescriptionSecondary>
    </div>
  );
};

export default Review;
