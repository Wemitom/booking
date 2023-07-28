const MainTitle = ({
  children
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => {
  return (
    <h1 className="3xl:text-8xl text-5xl font-bold !leading-snug text-white md:text-6xl lg:text-7xl">
      {children}
    </h1>
  );
};

export default MainTitle;
