import React from 'react';

const DescriptionSecondary = ({ children }: { children: string }) => {
  return (
    <p className="lg:text-md font-serif text-white md:text-sm 2xl:text-lg">
      {children}
    </p>
  );
};

export default DescriptionSecondary;
