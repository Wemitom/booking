import React from 'react';

const DescriptionSecondary = ({ children }: { children: string }) => {
  return (
    <p className="font-inter text-white lg:text-lg 2xl:text-xl">{children}</p>
  );
};

export default DescriptionSecondary;
