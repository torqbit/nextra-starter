"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "nextra-theme-docs";
import { FC } from "react";
import SvgIcons from "../SvgIcons";

const Navbar: FC<{}> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header
      style={{ padding: "0px 20px" }}
      className="navbar fixed z-40 border-(--border-color) bg-(--bg-primary) border-b w-full flex item-center justify-between "
    >
      <Link href={"/"}>
        <div className="flex items-center justify-center gap-[8px] h-[60px] text-(--font-primary) ">
          <Image
            src={"https://cdn.torqbit.com/static/brand/brand-icon.png"}
            alt="logo"
            className="h-auto w-[40px]"
            height={60}
            width={60}
          />
          <h4 style={{ fontSize: "1.4rem", fontWeight: "600" }}>Torqbit</h4>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-[15px]">
        <a style={{ fontWeight: "600" }} href="/docs" className="hover:text-(--brand-color) text-[14px] ">
          Documentation
        </a>
        <button className="primary-button">Get Started</button>
        <div
          className="group cursor-pointer border-(--border-color) rounded-full border p-[5px] hover:bg-(--bg-selected-menu) hover:text-[#ff]"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
          <i className="leading-0 text-[20px] group-hover:text-[#fff] ">
            {theme == "dark" ? SvgIcons.sun : SvgIcons.moon}
          </i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
