import Image from 'next/image';
import star from 'public/images/star.svg';

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

          <div className="mt-3 flex gap-1">
            {Array.from(Array(5)).map((_, i) => (
              <Image
                key={i}
                src={star}
                alt="star"
                className="w-[14px] lg:w-[26px]"
              />
            ))}
          </div>
        </div>

        <p className="ml-auto text-sm font-light text-white">
          {formatDate(date)}
        </p>
      </div>

      <p className="mt-8 font-inter text-white">{comment}</p>
    </div>
  );
};

export default Review;
