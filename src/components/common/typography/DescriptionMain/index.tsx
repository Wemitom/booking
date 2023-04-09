import React from 'react';

const DescriptionMain = ({ children }: { children: string }) => {
  return (
    <p className="font-medium text-white md:text-lg lg:text-xl 2xl:text-2xl">
      {children}
    </p>
  );
};

export default DescriptionMain;
