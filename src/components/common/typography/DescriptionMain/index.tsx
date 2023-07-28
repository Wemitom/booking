import React from 'react';

const DescriptionMain = ({ children }: { children: string }) => {
  return (
    <p className="md:text-md font-medium text-white lg:text-lg 2xl:text-xl">
      {children}
    </p>
  );
};

export default DescriptionMain;
