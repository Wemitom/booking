import { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import CircleButton from '@/components/common/CircleButton';
import DescriptionSecondary from '@/components/common/typography/DescriptionSecondary';
import SectionTitle from '@/components/common/typography/SectionTitle';
import { comments } from '@/utils/constants';
import { formatDate } from '@/utils/functions';

const Comment = ({
  user,
  stars,
  comment,
  date,
  src
}: {
  user: string;
  stars: number;
  comment: string;
  date: Date;
  src: string;
}) => {
  return (
    <div className="bg-secondary h-96 w-80 py-5 pl-8 pr-3 min-[450px]:w-96 min-[520px]:w-[28rem] lg:h-[38rem] lg:w-[36rem] lg:px-16 lg:py-11">
      <div className="mb-3 flex flex-row">
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
              i < stars ? (
                <span key={'star_' + i}>&#9733;</span>
              ) : (
                <span key={'star_' + i}>&#9734;</span>
              )
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

const CommentsSection = () => {
  const [curComment, setCurComment] = useState(0);
  const [width, setWidth] = useState(0);
  const flexRef = useRef<HTMLDivElement | null>(null);
  const { push } = useRouter();

  const handleClick = useCallback(
    (left?: boolean) => {
      if (curComment === 0 && left)
        setCurComment(comments.indexOf(comments[comments.length - 1]));
      else if (curComment === comments.length - 1 && !left)
        setCurComment(comments.indexOf(comments[0]));
      else if (left) setCurComment(comments.indexOf(comments[curComment - 1]));
      else setCurComment(comments.indexOf(comments[curComment + 1]));
    },
    [curComment]
  );

  useEffect(() => {
    const changeWidth = () => {
      if (flexRef.current) {
        setWidth(flexRef.current.firstElementChild!.clientWidth);
      }
    };

    if (window !== undefined) {
      window.addEventListener('resize', changeWidth);
      changeWidth();
    }

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <section className="mt-16 overflow-hidden px-5">
      <div className="mb-6 flex flex-row items-center justify-between lg:px-48">
        <SectionTitle>
          <p>ОТЗЫВЫ О НАС</p>
        </SectionTitle>

        <div className="mt-12 hidden gap-20 lg:flex">
          <CircleButton handleClick={() => handleClick(true)} left />
          <CircleButton handleClick={() => handleClick()} />
        </div>
      </div>

      <div
        className="flex w-fit gap-12 overflow-hidden transition-transform lg:pl-48"
        style={{
          transform: `translateX(-${
            (width / 16) * curComment + 3 * curComment
          }rem)`
        }}
        ref={flexRef}
      >
        {comments.map((comment) => (
          <Comment key={'comment_' + comment.id} {...comment} />
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-20 lg:hidden">
        <CircleButton handleClick={() => handleClick(true)} left />
        <CircleButton handleClick={() => handleClick()} />
      </div>

      <div className="mt-6 px-5 lg:px-48">
        <div className="flex justify-center lg:w-[280px]">
          <Button
            title="Больше отзывов"
            size="full"
            onClick={() => push('/reviews')}
            filled
          />
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
