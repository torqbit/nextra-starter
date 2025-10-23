import { FC } from "react";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Companies: FC<{
  items: {
    firstGroup: React.JSX.Element[];
    secondGroup: React.JSX.Element[];
  };
}> = ({ items }) => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <Carousel
      opts={{
        loop: true, // 👈 allows continuous forward motion
        align: "start",
        direction: "ltr", // 👈 ensures left-to-right sliding
        containScroll: "trimSnaps",
      }}
      plugins={[plugin.current]}
      className="w-full   border-(--border-color) bg-(--bg-secondary) border-l border-r  border-b "
    >
      <CarouselContent className="=-ml-[20px]">
        <CarouselItem key={1} className=" max-w-[80vw]   md:basis-1/2 flex items-center justify-around  lg:basis-1/5">
          {items.firstGroup.map((item, index) => {
            return (
              <div
                className={` w-full  border-(--border-color) ${
                  index == items.firstGroup.length - 1 ? "border-r" : " border-r"
                }  cursor-pointer flex items-center justify-center`}
                key={index}
              >
                <i className="leading-0 text-[120px] text-(--font-secondary) hover:text-(--font-primary)">{item}</i>
              </div>
            );
          })}
        </CarouselItem>
        <CarouselItem
          key={2}
          className="p-[0_0px_0_20px] max-w-[80vw]  md:basis-1/2 flex items-center justify-around  lg:basis-1/5"
        >
          {items.secondGroup.map((item, index) => {
            return (
              <div
                className={`w-full cursor-pointer
                     border-(--border-color)  ${
                       index == items.secondGroup.length - 1 ? "border-r" : "border-r"
                     } flex items-center justify-center`}
                key={index}
              >
                <i className="leading-[0] text-[120px] text-(--font-secondary) hover:text-(--font-primary)">{item}</i>
              </div>
            );
          })}
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Companies;
