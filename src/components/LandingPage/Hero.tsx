`"use client"`;

import AnimatedGradientTextView from "../ui/animated-gradient-text";
import { FC, ReactNode } from "react";

const Hero: FC<{
  tagLine?: {
    tag?: string;
    description: string;
  };
  title: string;
  description: string;
  buttonInfo?: {
    text: string;
    link: string;
  };
  extraDescription?: string;
  extraContent: ReactNode;
}> = ({ tagLine, description, title, buttonInfo, extraDescription, extraContent }) => {
  return (
    <section className=" flex items-center justify-between h-fullpy-[40px] border-(--border-color) bg-(--bg-secondary)  border-l border-r border-b relative p-[20px]">
      <div className="flex flex-col items-start  w-[50%] gap-[15px] justify-between h-full ">
        {tagLine && (
          <div className="flex items-center gap-[10px] w-fit rounded-[30px] bg-(--bg-selected-menu) p-[8px_15px]">
            {tagLine.tag && tagLine.tag.trim() !== "" && (
              <div className=" rounded-[15px] p-[5px_10px] bg-(--bg-primary)">New</div>
            )}
            {tagLine.description}
          </div>
        )}
        <div>
          <AnimatedGradientTextView text={title} />
        </div>
        <p className="text-[1rem] max-w-[70%]">{description}</p>
        <div className="flex flex-col items-start gap-[10px]">
          {buttonInfo && buttonInfo.text.trim() !== "" && (
            <a href={buttonInfo.link}>
              <button className="primary-button rounded-[4px] w-fit p-[8px_20px] ">{buttonInfo.text}</button>
            </a>
          )}
          {extraDescription && extraDescription.trim() !== "" && (
            <p className="text-[1rem] max-w-full">{extraDescription}</p>
          )}
        </div>
      </div>
      <div className="w-[50%]">{extraContent}</div>
    </section>
  );
};

export default Hero;
