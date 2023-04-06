import React, { useEffect, useRef } from 'react';

import { classNames } from '@/utils/functions';
import useSelect from '@/utils/hooks/useSelect';

const Options = ({
  options,
  width
}: {
  options: readonly string[];
  width: number;
}) => {
  const prevChosen = useRef<string | undefined>();
  const { chosen, setChosen } = useSelect();

  useEffect(() => {
    const indicator = document.getElementById('indicator');

    if (indicator && prevChosen.current !== chosen && prevChosen.current) {
      const curPos = +indicator?.style.transform.replace(/[^-?\d.]/g, '');

      indicator.style.transform = `translateX(${
        curPos +
        (options.indexOf(chosen) - options.indexOf(prevChosen.current)) * width
      }rem)`;
    }

    prevChosen.current = chosen;
  }, [chosen, options, width]);

  return (
    <div className="relative">
      <ul className="flex" role="menu">
        {options.map((option) => (
          <li
            className={classNames(
              'px-4 text-center border-b border-accent/50',
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
        id="indicator"
        className="absolute bottom-0 h-0 w-[${width}rem] border border-accent transition-transform"
        style={{ width: width + 'rem' }}
      />
    </div>
  );
};

export default Options;
