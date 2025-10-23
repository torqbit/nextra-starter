import { FC, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="w-full">
      <Navbar />
      <div
        style={{
          maxWidth: "80vw",
          margin: "0 auto",
          border: "1px solid var(--border-color)",
          borderTop: "none",
          borderBottom: "none",
        }}
        className="max-w-[80vw] relative m-[0_auto] ] "
      >
        {children}
      </div>
    </section>
  );
};

export default Layout;
