import { FlickeringGrid } from "./flickering-grid";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const PageSection: React.FC<{ name?: string; description?: string; isLastSection?: boolean; children: ReactNode }> = ({
  name,
  description,
  isLastSection,
  children,
}) => {
  return (
    <div className={cn("w-full border-x", isLastSection && "border-b")}>
      {name && description && (
        <div className='relative w-full h-[200px] overflow-hidden border-b'>
          <FlickeringGrid
            className='absolute inset-0 w-full h-full z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]'
            squareSize={4}
            gridGap={6}
            color='#9b9b9bff'
            maxOpacity={0.2}
            flickerChance={0.1}
            height={200}
            width={1400}
          />
          <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6'>
            <h2 className='text-3xl font-bold text-foreground mb-2'>{name}</h2>
            <p className='text-muted-foreground max-w-2xl'>{description}</p>
          </div>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
