import React, { useEffect, useRef } from 'react';

import { classNames } from '@/utils/functions';
import useSelect from '@/utils/hooks/useSelect';

const Options = ({
  options,
  indicatorID,
  width
}: {
  options: readonly string[];
  indicatorID: number;
  width: number;
}) => {
  const prevChosen = useRef<string | undefined>();
  const { chosen, setChosen } = useSelect();

  useEffect(() => {
    const indicator = document.getElementById('indicator' + indicatorID);

    if (indicator && prevChosen.current !== chosen && prevChosen.current) {
      const curPos = +indicator?.style.transform.replace(/[^-?\d.]/g, '');

      indicator.style.transform = `translateX(${
        curPos +
        (options.indexOf(chosen) - options.indexOf(prevChosen.current)) * width
      }rem)`;
    }

    prevChosen.current = chosen;
  }, [chosen, indicatorID, options, width]);

  return (
    <div className="relative">
      <ul className="flex" role="button">
        {options.map((option) => (
          <li
            className={classNames(
              'px-4 text-center border-b border-accent/50 font-inter',
              chosen === option
                ? 'text-white'
                : 'cursor-pointer text-white/50 transition-colors'
            )}
            key={option}
            onClick={() => setChosen && setChosen(option)}
            style={{ width: width + 'rem' }}
            role="button"
          >
            {option}
          </li>
        ))}
      </ul>

      <div
        id={'indicator' + indicatorID}
        className="absolute bottom-0 h-0 w-[${width}rem] border border-accent transition-transform"
        style={{ width: width + 'rem' }}
      />
    </div>
  );
};

export default Options;
