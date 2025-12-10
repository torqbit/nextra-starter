`"use client"`;

import AnimatedGradientTextView from "../ui/animated-gradient-text";
import { FC, ReactNode } from "react";
import { ShineBorder } from "../ui/shiny-border";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";

const RubiksCube = dynamic(() => import("../ui/rubiks"), {
  ssr: false,
  loading: () => <div></div>,
});

const Hero: FC<{
  notification?: {
    tag?: string;
    description: string;
  };
  title: string;
  description: string;
  btnGetStarted?: {
    text: string;
    link: string;
  };
  btnBookDemo?: {
    text: string;
    link: string;
  };
  extraDescription?: string;
  extraContent: ReactNode;
}> = ({ notification, description, title, btnGetStarted, btnBookDemo, extraDescription, extraContent }) => {
  const theme = useTheme();
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between py-6 md:py-10 nextra-border border-l border-r border-b relative px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-start w-full lg:w-1/2 gap-2 sm:gap-4 justify-between h-full'>
        {notification && (
          <div className='flex relative items-center gap-2.5 w-fit rounded-3xl bg-(--bg-selected-menu) px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base'>
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            {notification.tag && notification.tag.trim() !== "" && (
              <div className='rounded-xl px-2.5 py-1 text-sm sm:text-base bg-(--bg-primary) whitespace-nowrap'>{notification.tag}</div>
            )}

            <span className='whitespace-nowrap'>{notification.description}</span>
          </div>
        )}
        <div>
          <AnimatedGradientTextView text={title} />
        </div>
        <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 w-full max-w-full lg:max-w-[90%] mt-0'>
          {description}
        </p>
        <div className='flex  items-start gap-3 sm:gap-4 w-full mt-4 sm:mt-6'>
          {btnGetStarted && btnGetStarted.text.trim() !== "" && (
            <a href={btnGetStarted.link} className='w-full sm:w-auto'>
              <Button variant='default' className='bg-brand text-white'>
                {btnGetStarted.text}
              </Button>
            </a>
          )}
          {btnBookDemo && btnBookDemo.text.trim() !== "" && (
            <a href={btnBookDemo.link} className='w-full sm:w-auto'>
              <Button variant='outline'>{btnBookDemo.text}</Button>
            </a>
          )}
        </div>
        {extraDescription && extraDescription.trim() !== "" && (
          <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 w-full'>{extraDescription}</p>
        )}
      </div>

      <RubiksCube />
    </section>
  );
};

export default Hero;
