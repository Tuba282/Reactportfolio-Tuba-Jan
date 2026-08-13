import { cn } from '/lib/utils';

export const Marquee = ({ className, ...props }) => (
  <div
    className={cn('relative w-full overflow-hidden', className)}
    {...props}
  />
);

export const MarqueeContent = ({
  direction = "left",
  children,
  ...props
}) => {
  const animClass = direction === "right" ? "marquee-scroll-right" : "marquee-scroll-left";
  return (
    <div className={cn("flex w-max marquee-track", animClass)} {...props}>
      <div className="flex shrink-0">{children}</div>
      <div className="flex shrink-0" aria-hidden="true">{children}</div>
    </div>
  );
};

export const MarqueeFade = ({
  className,
  side,
  ...props
}) => (
  <div
    className={cn(
      'absolute top-0 bottom-0 z-10 h-full w-24 from-black to-transparent pointer-events-none',
      side === 'left' ? 'left-0 bg-gradient-to-r' : 'right-0 bg-gradient-to-l',
      className
    )}
    {...props}
  />
);

export const MarqueeItem = ({ className, ...props }) => (
  <div
    className={cn('mx-2 flex-shrink-0 object-contain', className)}
    {...props}
  />
);
