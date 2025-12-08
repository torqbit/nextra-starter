import { FC } from "react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Companies: FC<{
  logos: React.JSX.Element[];
}> = ({ logos }) => {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      playOnInit: true,
    })
  );

  return (
    <div className='w-full overflow-hidden'>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          direction: "ltr",
          containScroll: "trimSnaps",
          slidesToScroll: 1,
          inViewThreshold: 0.5,
        }}
        plugins={[plugin.current]}
        className='w-full relative nextra-border border-l border-r border-b'
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}>
        <CarouselContent className='flex'>
          {logos.map((logo, index) => {
            return (
              <CarouselItem
                key={index}
                className={`relative 
                  basis-1/2 
                  sm:basis-1/3 
                  md:basis-1/4 
                  lg:basis-1/6 
                  p-0 
                  border-r nextra-border
                `}>
                <div className='flex items-center justify-center p-4 sm:p-6 h-full w-full'>
                  <div className='relative w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center'>
                    <i
                      className={`
                        w-full h-full 
                        flex items-center justify-center 
                        text-[60px] sm:text-[80px] lg:text-[100px] xl:text-[120px]
                        text-(--font-secondary) hover:text-(--font-primary)
                        transition-all duration-300 transform hover:scale-105
                        p-2
                      `}
                      aria-hidden='true'>
                      {logo}
                    </i>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Companies;
