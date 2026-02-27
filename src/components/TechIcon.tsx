export const TechIcon = ({
  className,
  label,
}: {
  className: string;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-1 w-[60px]">
    <i className={`${className} text-[2rem]`} />
    <span className="text-xs text-center">{label}</span>
  </div>
);
