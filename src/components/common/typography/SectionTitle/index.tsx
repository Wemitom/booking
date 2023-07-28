import React from 'react';

const SectionTitle = ({
  children
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => {
  return (
    <h2 className="text-accent mt-12 font-serif text-3xl font-bold xl:text-4xl 2xl:text-5xl">
      {children}
    </h2>
  );
};

export default SectionTitle;
