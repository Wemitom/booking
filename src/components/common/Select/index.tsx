import { Dispatch, SetStateAction, createContext, useState } from 'react';

import Options from './Options';

export const SelectContext = createContext<{
  chosen: string;
  setChosen: Dispatch<SetStateAction<string>> | undefined;
}>({
  chosen: '',
  setChosen: undefined
});
SelectContext.displayName = 'SelectContext';

const Select = ({
  children,
  options,
  renderOptions,
  indicatorID = 0,
  width = 12
}: {
  children: JSX.Element;
  options: readonly string[];
  indicatorID?: number;
  renderOptions?: boolean;
  width?: number;
}) => {
  const [chosen, setChosen] = useState<string>(options[0]);

  return (
    <SelectContext.Provider value={{ chosen, setChosen }}>
      <div>
        {renderOptions && (
          <Options options={options} width={width} indicatorID={indicatorID} />
        )}
        {children}
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
