// app/layout.tsx (for Next.js app-router) or pages/_app.tsx
import { Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import type { Metadata } from "next";
import { getPageMap } from "nextra/page-map";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "My Docs",
  description: "Documentation with Nextra",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr">
      <body>
        <Layout
          pageMap={pageMap}
          navbar={
            <Navbar
              logoLink="/"
              className="w-full justify-between px-[20px] border-(--border-color) border-b"
              logo={
                <Image
                  src={"https://cdn.torqbit.com/static/brand/brand-icon.png"}
                  alt="logo"
                  className="h-auto w-[40px]"
                  height={60}
                  width={60}
                />
              }
            />
          }
          docsRepositoryBase="https://github.com/your-org/your-repo"
          darkMode={true}
          footer={<></>}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
