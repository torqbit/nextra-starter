import { ComponentPropsWithoutRef, FC } from "react";

import { cn } from "../../lib/utils";

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      style={
        {
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        `animate-gradient inline bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

const AnimatedGradientTextView: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 ani  transition-shadow duration-500 ease-out ">
      <span
        style={{
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      <AnimatedGradientText className="">
        <h1 className="text-inherit " style={{ fontWeight: "bold" }}>
          {text}
        </h1>
      </AnimatedGradientText>
    </div>
  );
};

export default AnimatedGradientTextView;
