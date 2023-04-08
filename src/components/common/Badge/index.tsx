const Badge = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="w-fit rounded-2xl border border-accent p-1 font-inter text-sm text-white">
      {children}
    </div>
  );
};

export default Badge;
