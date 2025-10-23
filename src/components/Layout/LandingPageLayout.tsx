"use client";
// import "../LandingPage/layout.css";

import { FC, ReactNode } from "react";
import { useTheme, useThemeConfig } from "nextra-theme-docs";
import Navbar from "../Navbar/Navbar";

const LandingPageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <section className="relative w-full">
        <Navbar />
        <div
          style={{
            maxWidth: "80vw",
            margin: "0 auto",
            paddingTop: 60,
          }}
          // className=" relative z-1 top-[60px] bottom-[60px]"
        >
          {children}
        </div>
      </section>
    </>
  );
};

export default LandingPageLayout;
