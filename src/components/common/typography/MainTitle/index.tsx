const MainTitle = ({
  children
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => {
  return (
    <h1 className="3xl:text-7xl font-serif text-4xl font-extrabold !leading-snug text-white md:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
};

export default MainTitle;
