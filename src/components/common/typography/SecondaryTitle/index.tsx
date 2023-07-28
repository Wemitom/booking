import React from 'react';

const SecondaryTitle = ({ children }: { children: string }) => {
  return (
    <h3 className="text-accent font-serif text-xl font-bold lg:text-2xl">
      {children}
    </h3>
  );
};

export default SecondaryTitle;
