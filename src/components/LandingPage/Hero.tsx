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
    <section className='flex flex-col lg:flex-row items-center justify-between py-6 md:py-10 nextra-border border-l border-r border-b relative px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-start w-full lg:w-1/2 gap-4 sm:gap-6 justify-between h-full'>
        {tagLine && (
          <div className='flex items-center gap-2.5 w-fit rounded-3xl bg-(--bg-selected-menu) px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base'>
            {tagLine.tag && tagLine.tag.trim() !== "" && (
              <div className='rounded-xl px-2.5 py-1 text-sm sm:text-base bg-(--bg-primary) whitespace-nowrap'>{tagLine.tag}</div>
            )}
            <span className='whitespace-nowrap'>{tagLine.description}</span>
          </div>
        )}
        <div>
          <AnimatedGradientTextView text={title} />
        </div>
        <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 w-full max-w-full lg:max-w-[90%] mt-2 sm:mt-4'>
          {description}
        </p>
        <div className='flex flex-col items-start gap-3 sm:gap-4 w-full mt-4 sm:mt-6'>
          {buttonInfo && buttonInfo.text.trim() !== "" && (
            <a href={buttonInfo.link} className='w-full sm:w-auto'>
              <button className='primary-button rounded w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-200'>
                {buttonInfo.text}
              </button>
            </a>
          )}
          {extraDescription && extraDescription.trim() !== "" && (
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 w-full'>{extraDescription}</p>
          )}
        </div>
      </div>
      <div className='w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8 xl:pl-12'>{extraContent}</div>
    </section>
  );
};

export default Hero;
