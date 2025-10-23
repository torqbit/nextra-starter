import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC<{}> = () => {
  return (
    <header style={{ padding: "0px 20px" }} className="navbar w-full flex item-center justify-between ">
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
      <div className="flex items-center justify-center gap-[10px]">
        <button className="primary-button">Get Started</button>
      </div>
    </header>
  );
};

export default Navbar;
