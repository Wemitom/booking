import React from 'react';

const SecondaryTitle = ({ children }: { children: string }) => {
  return (
    <h3 className="font-inter text-accent text-2xl font-bold lg:text-3xl">
      {children}
    </h3>
  );
};

export default SecondaryTitle;
