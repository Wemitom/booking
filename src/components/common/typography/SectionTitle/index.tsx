import React from 'react';

const SectionTitle = ({
  children
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => {
  return (
    <h2 className="font-inter text-accent mt-12 text-4xl font-bold xl:text-5xl 2xl:text-6xl">
      {children}
    </h2>
  );
};

export default SectionTitle;
