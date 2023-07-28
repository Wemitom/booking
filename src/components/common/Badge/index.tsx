const Badge = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="border-accent font-serif w-fit rounded-2xl border p-1 text-sm text-white">
      {children}
    </div>
  );
};

export default Badge;
